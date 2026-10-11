
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Search,
    X,
    Mic,
    MicOff,
    ArrowUpRight,
} from "lucide-react";

import products from "../data/products";

function SearchOverlay({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [voiceError, setVoiceError] = useState("");
    const [voiceLanguage, setVoiceLanguage] = useState("en-US");

    const inputRef = useRef(null);
    const recognitionRef = useRef(null);
    const navigate = useNavigate();

    // ================= PRODUCT SEARCH =================

    const filteredProducts = useMemo(() => {
        const search = query.trim().toLowerCase();

        if (!search) return [];

        return products
            .filter((product) => {
                const searchableText = [
                    product.name,
                    product.title,
                    product.category,
                    product.description,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(search);
            })
            .slice(0, 6);
    }, [query]);

    // ================= FOCUS & ESCAPE =================

    useEffect(() => {
        if (!isOpen) return;

        const timer = window.setTimeout(() => {
            inputRef.current?.focus();
        }, 300);

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            window.clearTimeout(timer);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    // ================= STOP VOICE SEARCH =================

    const stopListening = () => {
        const recognition = recognitionRef.current;

        recognitionRef.current = null;
        setIsListening(false);

        if (recognition) {
            recognition.onend = null;

            try {
                recognition.abort();
            } catch {
                // Recognition may already have stopped.
            }
        }
    };

    // Stop the microphone when the overlay closes or unmounts.
    useEffect(() => {
        if (!isOpen) {
            stopListening();
        }

        return () => {
            const recognition = recognitionRef.current;
            recognitionRef.current = null;

            if (recognition) {
                recognition.onend = null;

                try {
                    recognition.abort();
                } catch {
                    // Ignore an already stopped recognition session.
                }
            }
        };
    }, [isOpen]);

    // ================= VOICE SEARCH =================

    const startVoiceSearch = () => {
        if (isListening) {
            stopListening();
            return;
        }

        setVoiceError("");

        // Speech recognition support varies by browser.
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            setVoiceError(
                "Voice search is not supported in this browser. Please use the latest Google Chrome."
            );
            return;
        }

        // Microphone access requires HTTPS or localhost.
        if (!window.isSecureContext) {
            setVoiceError(
                "Microphone access requires HTTPS or localhost. Open your site using http://localhost."
            );
            return;
        }

        let recognition;

        try {
            recognition = new SpeechRecognition();

            recognition.lang = voiceLanguage;
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;

            recognitionRef.current = recognition;
            setIsListening(true);

            recognition.onstart = () => {
                setIsListening(true);
                setVoiceError("");
            };


            recognition.onresult = (event) => {
                let transcript = "";

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }

                if (transcript.trim()) {
                    setQuery((previous) => {
                        const finalParts = [];

                        for (let i = 0; i < event.results.length; i++) {
                            if (event.results[i].isFinal) {
                                finalParts.push(event.results[i][0].transcript);
                            }
                        }

                        // Show recognized words immediately, including interim results.
                        return transcript.trim();
                    });

                    setVoiceError("");
                }
            };


            recognition.onerror = (event) => {
                const errors = {
                    "not-allowed":
                        "Microphone permission is blocked. Allow microphone access in Chrome site settings.",
                    "service-not-allowed":
                        "The browser has blocked speech recognition. Check your browser permissions.",
                    "audio-capture":
                        "No working microphone was found. Check your microphone connection and Windows settings.",
                    "no-speech":
                        "No speech detected. Click the microphone and speak clearly.",
                    network:
                        "Speech recognition could not connect to its service. Check your internet connection and try again.",
                    "language-not-supported":
                        "This speech language is not supported by your browser. Try English.",
                    aborted: "",
                };

                const message =
                    errors[event.error] ??
                    "Voice search failed. Please try again.";

                if (message) {
                    setVoiceError(message);
                }

                recognitionRef.current = null;
                setIsListening(false);
            };

            recognition.onend = () => {
                if (recognitionRef.current === recognition) {
                    recognitionRef.current = null;
                    setIsListening(false);
                }
            };

            recognition.start();
        } catch (error) {
            if (recognitionRef.current === recognition) {
                recognitionRef.current = null;
            }

            setIsListening(false);

            setVoiceError(
                error?.name === "NotAllowedError" ||
                    error?.name === "SecurityError"
                    ? "Microphone access is blocked. Allow permission in Chrome settings."
                    : "Unable to start voice search. Refresh the page and try again."
            );
        }
    };

    // ================= CLOSE & NAVIGATION =================

    const handleClose = () => {
        stopListening();
        onClose();
    };

    const openProduct = (product) => {
        handleClose();
        navigate(`/product/${product.id}`);
    };

    const openCollection = (category) => {
        handleClose();
        navigate(
            `/shop?category=${encodeURIComponent(category)}`
        );
    };

    const viewAllResults = () => {
        const search = query.trim();

        if (!search) return;

        handleClose();
        navigate(`/shop?search=${encodeURIComponent(search)}`);
    };

    // Don't render when closed.
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[3px]"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    handleClose();
                }
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-label="Search products"
                className="search-overlay-panel relative flex h-full w-full flex-col overflow-y-auto bg-white shadow-2xl sm:mr-6 sm:h-auto sm:max-h-[85vh] sm:w-[min(600px,calc(100%-3rem))] sm:border sm:border-black/10"
                onMouseDown={(event) => event.stopPropagation()}
            >
                {/* HEADER */}

                <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-8">
                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[3px] text-red-600">
                            MASHFAA COLLECTION
                        </p>

                        <h2 className="mt-1 text-xl font-semibold tracking-tight text-black">
                            Find your style
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        aria-label="Close search"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black hover:text-white"
                    >
                        <X size={19} />
                    </button>
                </div>

                {/* SEARCH INPUT */}

                <div className="px-5 pt-7 sm:px-8">
                    <label
                        htmlFor="mashfaa-search"
                        className="mb-3 block text-[10px] font-semibold uppercase tracking-[1.8px] text-gray-500"
                    >
                        Search products
                    </label>

                    <div className="flex items-center gap-3 border-b-2 border-black pb-3">
                        <Search
                            size={21}
                            strokeWidth={1.5}
                            className="shrink-0 text-black"
                        />

                        <input
                            ref={inputRef}
                            id="mashfaa-search"
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            onKeyDown={(event) => {
                                if (
                                    event.key === "Enter" &&
                                    filteredProducts.length > 0
                                ) {
                                    openProduct(filteredProducts[0]);
                                }
                            }}
                            placeholder="Search hijabs, abayas, handbags..."
                            autoComplete="off"
                            className="min-w-0 flex-1 bg-transparent text-sm text-black outline-none placeholder:text-gray-400"
                        />

                        {query && (
                            <button
                                type="button"
                                onClick={() => {
                                    setQuery("");
                                    setVoiceError("");
                                    inputRef.current?.focus();
                                }}
                                aria-label="Clear search"
                                className="text-gray-400 transition hover:text-red-600"
                            >
                                <X size={17} />
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={startVoiceSearch}
                            aria-label={
                                isListening ? "Stop voice search" : "Search by voice"
                            }
                            title={
                                isListening ? "Stop listening" : "Search by voice"
                            }
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${isListening
                                ? "animate-pulse bg-red-600 text-white"
                                : "bg-black text-white hover:bg-red-600"
                                }`}
                        >
                            {isListening ? (
                                <MicOff size={18} />
                            ) : (
                                <Mic size={18} />
                            )}
                        </button>
                    </div>

                    {/* VOICE LANGUAGE */}

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">
                            Voice language:
                        </span>

                        <button
                            type="button"
                            disabled={isListening}
                            onClick={() => {
                                setVoiceLanguage("en-US");
                                setVoiceError("");
                            }}
                            className={`rounded-full border px-3 py-1.5 text-[10px] transition ${voiceLanguage === "en-US"
                                ? "border-black bg-black text-white"
                                : "border-black/15 text-black hover:border-black"
                                } disabled:opacity-50`}
                        >
                            English
                        </button>

                        <button
                            type="button"
                            disabled={isListening}
                            onClick={() => {
                                setVoiceLanguage("ur-PK");
                                setVoiceError("");
                            }}
                            className={`rounded-full border px-3 py-1.5 text-[10px] transition ${voiceLanguage === "ur-PK"
                                ? "border-black bg-black text-white"
                                : "border-black/15 text-black hover:border-black"
                                } disabled:opacity-50`}
                        >
                            Urdu
                        </button>
                    </div>

                    {isListening && (
                        <p
                            role="status"
                            className="mt-3 flex items-center gap-2 text-xs text-red-600"
                        >
                            <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
                            Listening... Speak now
                        </p>
                    )}

                    {voiceError && (
                        <p
                            role="alert"
                            className="mt-3 text-xs leading-5 text-red-600"
                        >
                            {voiceError}
                        </p>
                    )}

                    <p className="mt-3 text-[11px] leading-5 text-gray-400">
                        Type a product name or tap the microphone to speak.
                    </p>
                </div>

                {/* SEARCH RESULTS */}

                <div className="flex-1 px-5 pb-8 pt-7 sm:px-8">
                    {!query.trim() ? (
                        <div>
                            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[2px] text-gray-500">
                                Explore collections
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Hijabs",
                                    "Abayas",
                                    "Brooches",
                                    "Handbags",
                                ].map((category) => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => openCollection(category)}
                                        className="border border-black/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[1.2px] text-black transition hover:border-black hover:bg-black hover:text-white"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : filteredProducts.length > 0 ? (
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-500">
                                    Matching products
                                </p>

                                <span className="text-xs text-gray-400">
                                    {filteredProducts.length} results
                                </span>
                            </div>

                            <div className="divide-y divide-black/[0.08]">
                                {filteredProducts.map((product) => (
                                    <button
                                        key={product.id}
                                        type="button"
                                        onClick={() => openProduct(product)}
                                        className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                                    >
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-medium text-black transition group-hover:text-red-600">
                                                {product.name || product.title}
                                            </p>

                                            {product.category && (
                                                <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-gray-400">
                                                    {product.category}
                                                </p>
                                            )}

                                            {product.price != null && (
                                                <p className="mt-2 text-xs font-semibold text-black">
                                                    Rs.{" "}
                                                    {Number(product.price).toLocaleString("en-PK")}
                                                </p>
                                            )}
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="shrink-0 text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600"
                                        />
                                    </button>
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={viewAllResults}
                                className="mt-5 w-full bg-black px-5 py-4 text-[10px] font-semibold uppercase tracking-[2px] text-white transition hover:bg-red-600"
                            >
                                View all search results
                            </button>
                        </div>
                    ) : (
                        <div className="flex min-h-40 flex-col items-center justify-center text-center">
                            <Search
                                size={27}
                                strokeWidth={1.2}
                                className="mb-4 text-gray-300"
                            />

                            <h3 className="text-sm font-semibold text-black">
                                No products found
                            </h3>

                            <p className="mt-2 max-w-xs text-xs leading-5 text-gray-500">
                                Try another product name or browse our collections.
                            </p>
                        </div>
                    )}
                </div>

                {/* FOOTER */}

                <div className="border-t border-black/[0.08] px-5 py-4 sm:px-8">
                    <p className="text-center text-[9px] uppercase tracking-[2px] text-gray-400">
                        Discover your everyday elegance
                    </p>
                </div>
            </section>

            {/* SLIDE ANIMATION */}

            <style>{`
        .search-overlay-panel {
          animation: mashfaaSearchSlideIn 0.3s ease-out both;
        }

        @keyframes mashfaaSearchSlideIn {
          from {
            opacity: 0;
            transform: translateX(35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .search-overlay-panel {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
}

export default SearchOverlay;

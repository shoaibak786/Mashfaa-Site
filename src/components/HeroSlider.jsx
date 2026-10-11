import { useEffect, useState } from "react";

import hero1 from "../assets/hero/hero 1.png";
import hero2 from "../assets/hero/hero 2.png";
import hero3 from "../assets/hero/hero 3.png";

function HeroSlider() {
  const slides = [
    {
      type: "image",
      src: hero1,
      eyebrow: "THE NEW EDIT",
      title: "Elegance",
      subtitle: "Designed for every moment.",
    },
    {
      type: "image",
      src: hero2,
      eyebrow: "MODERN ESSENTIALS",
      title: "Timeless",
      subtitle: "Style that speaks quietly.",
    },
    {
      type: "image",
      src: hero3,
      eyebrow: "CURATED FOR YOU",
      title: "Refined",
      subtitle: "Accessories with intention.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden bg-black sm:h-[82vh] lg:h-screen">

      {/* ================================================= */}
      {/* SLIDES */}
      {/* ================================================= */}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            currentSlide === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={`Mashfa Fashion ${index + 1}`}
            className={`h-full w-full object-cover object-top transition-transform duration-[6000ms] ease-out ${
              currentSlide === index
                ? "scale-105"
                : "scale-100"
            }`}
          />
        </div>
      ))}


      {/* ================================================= */}
      {/* PREMIUM OVERLAY */}
      {/* ================================================= */}

      {/* Overall Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

      {/* Top Gradient - Navbar blending */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />


      {/* ================================================= */}
      {/* HERO CONTENT */}
      {/* ================================================= */}

      <div className="absolute inset-0 z-10 flex items-end">

        <div className="w-full px-6 pb-20 sm:px-10 sm:pb-24 md:px-14 lg:px-16 lg:pb-28">

          <div
            key={currentSlide}
            className="max-w-xl animate-hero-content"
          >

            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-red-500 sm:w-10" />

              <p className="text-[9px] font-medium tracking-[4px] text-white/80 sm:text-[10px] sm:tracking-[5px]">
                {activeSlide.eyebrow}
              </p>

            </div>


            {/* Main Heading */}

            <h1 className="mt-4 text-3xl font-light leading-none tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">

              {activeSlide.title}

              <span className="block font-serif italic font-normal text-white/90">
                Collection
              </span>

            </h1>


            {/* Subtitle */}

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              {activeSlide.subtitle}
            </p>


            {/* CTA */}

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <button
                className="group flex h-12 items-center gap-5 bg-white px-7 text-[10px] font-semibold tracking-[2px] text-black transition-all duration-300 hover:bg-red-600 hover:text-white sm:h-13 sm:px-8"
              >
                SHOP NOW

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>


              <button
                className="group flex h-12 items-center gap-3 border border-white/40 bg-black/10 px-6 text-[10px] font-medium tracking-[2px] text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                EXPLORE

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* SLIDE COUNTER */}
      {/* ================================================= */}

      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-3 text-white sm:bottom-10 sm:left-10 md:left-14 lg:left-16">

        <span className="text-[10px] font-medium tracking-[2px]">
          0{currentSlide + 1}
        </span>

        <span className="h-px w-8 bg-white/30" />

        <span className="text-[10px] tracking-[2px] text-white/40">
          0{slides.length}
        </span>

      </div>


      {/* ================================================= */}
      {/* CIRCULAR PROGRESS NAVIGATION */}
      {/* ================================================= */}

      <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 sm:bottom-9 sm:right-10 md:right-14 lg:right-16">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative h-6 w-6 transition-transform duration-300 hover:scale-110"
          >

            {/* Background Ring */}

            <svg
              className="absolute inset-0 h-full w-full -rotate-90"
              viewBox="0 0 36 36"
            >

              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.3"
              />

              {/* Active Progress */}

              {currentSlide === index && (
                <circle
                  key={currentSlide}
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  pathLength="100"
                  className="animate-ring-progress"
                />
              )}

            </svg>


            {/* Center Dot */}

            <span
              className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white"
                  : "bg-white/50"
              }`}
            />

          </button>
        ))}

      </div>

    </section>
  );
}

export default HeroSlider;
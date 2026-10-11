
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import SearchOverlay from "../components/SearchOverlay";

import {
  Search,
  UserRound,
  ShoppingBag,
  Heart,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

function Navbar({ solid = false }) {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // ================= AUTH STATE =================

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("mashfaa-user") === "logged-in"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(
        localStorage.getItem("mashfaa-user") === "logged-in"
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // ================= SCROLL DETECTION =================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= NAVIGATION LINKS =================

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Hijabs", path: "/shop?category=Hijabs" },
    { name: "Abayas", path: "/shop?category=Abayas" },
    { name: "Broches", path: "/shop?category=Brooches" },
    { name: "Hand Bags", path: "/shop?category=Handbags" },
    { name: "Deals & Bundles", path: "/deals&bundles" },
  ];

  // ================= NAVIGATION HELPERS =================

  const handleMobileNavigation = () => {
    setIsMenuOpen(false);
  };

  const handleAccountClick = () => {
    navigate(isLoggedIn ? "/account" : "/login");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleSearchOpen = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(true);
  };

  // Navbar color changes on hover, scroll or mobile menu.
  const isLightNavbar =
    solid || isScrolled || isHovered || isMenuOpen;

  return (
    <>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
          isLightNavbar
            ? "border-black/[0.08] bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-white/10 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* ================= MAIN NAVBAR ================= */}

          <div className="flex h-[76px] items-center justify-between lg:h-[84px]">

            {/* LOGO */}

            <Link
              to="/"
              aria-label="MASHFA Home"
              onClick={handleMobileNavigation}
              className={`group flex items-center transition-colors duration-500 ${
                isLightNavbar ? "text-black" : "text-white"
              }`}
            >
              <div className="relative">
                <h1 className="text-[23px] font-semibold tracking-[4px] sm:text-[25px]">
                  MASHFA
                </h1>

                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}

            <div className="hidden items-center gap-7 lg:flex xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group relative py-2 text-[15px] font-medium uppercase tracking-[1.7px] transition-colors duration-300 ${
                    link.name === "Deals & Bundles"
                      ? "text-red-600"
                      : isLightNavbar
                        ? "text-gray-800 hover:text-red-600"
                        : "text-white hover:text-red-400"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      link.name === "Deals & Bundles"
                        ? "bg-red-600"
                        : "bg-current"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE ICONS */}

            <div className="flex items-center gap-2 sm:gap-3">

              {/* SEARCH */}

              <button
                type="button"
                onClick={handleSearchOpen}
                aria-label="Open search"
                aria-haspopup="dialog"
                aria-expanded={isSearchOpen}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isLightNavbar
                    ? "text-gray-800 hover:bg-black/[0.05] hover:text-red-600"
                    : "text-white hover:bg-white/10 hover:text-red-400"
                }`}
              >
                <Search
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>

              {/* ACCOUNT */}

              <button
                type="button"
                onClick={handleAccountClick}
                aria-label="Account"
                className={`group relative hidden h-10 w-10 items-center justify-center rounded-full transition-all duration-300 sm:flex ${
                  isLightNavbar
                    ? "text-gray-800 hover:bg-black/[0.05] hover:text-red-600"
                    : "text-white hover:bg-white/10 hover:text-red-400"
                }`}
              >
                <UserRound
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>

              {/* WISHLIST */}

              <button
                type="button"
                onClick={handleWishlistClick}
                aria-label="Wishlist"
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isLightNavbar
                    ? "text-gray-800 hover:bg-black/[0.05] hover:text-red-600"
                    : "text-white hover:bg-white/10 hover:text-red-400"
                }`}
              >
                <Heart
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                {wishlistCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF2323] px-1 text-[9px] font-semibold text-white ring-2 ring-white">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </button>

              {/* SHOPPING BAG */}

              <Link
                to="/cart"
                aria-label="Shopping Bag"
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isLightNavbar
                    ? "text-gray-800 hover:bg-black/[0.05] hover:text-red-600"
                    : "text-white hover:bg-white/10 hover:text-red-400"
                }`}
              >
                <ShoppingBag
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                {cartCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF2323] px-1 text-[9px] font-semibold text-white ring-2 ring-white">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              {/* MOBILE MENU BUTTON */}

              <button
                type="button"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`group ml-1 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
                  isLightNavbar
                    ? "text-gray-800 hover:bg-black/[0.05] hover:text-red-600"
                    : "text-white hover:bg-white/10 hover:text-red-400"
                }`}
              >
                {isMenuOpen ? (
                  <X
                    size={21}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:rotate-90"
                  />
                ) : (
                  <Menu size={21} strokeWidth={1.7} />
                )}
              </button>

            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              isMenuOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`border-t pb-5 pt-3 transition-colors duration-500 ${
                isLightNavbar
                  ? "border-black/[0.07] bg-white"
                  : "border-white/10 bg-transparent"
              }`}
            >

              {/* MENU LABEL */}

              <div className="mb-2 flex items-center justify-between px-2 py-2">
                <span className="text-[9px] font-semibold tracking-[3px] text-gray-400">
                  MENU
                </span>

                <span className="ml-4 h-px flex-1 bg-gray-100" />
              </div>

              {/* MOBILE LINKS */}

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleMobileNavigation}
                    className={`group flex items-center justify-between border-b px-2 py-4 transition-all duration-300 ${
                      link.name === "Deals & Bundles"
                        ? "border-black/[0.05] text-red-500"
                        : isLightNavbar
                          ? "border-black/[0.05] text-gray-800 hover:pl-4 hover:text-red-600"
                          : "border-white/10 text-white hover:pl-4 hover:text-red-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[9px] font-semibold tracking-[3px] transition-colors duration-500 ${
                          isLightNavbar
                            ? "text-gray-400"
                            : "text-white/50"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] font-medium uppercase tracking-[1.8px]">
                        {link.name}
                      </span>
                    </div>

                    <ChevronRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-gray-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-600"
                    />
                  </Link>
                ))}
              </div>

              {/* MOBILE ACCOUNT ACTIONS */}

              <div
                className={`mt-5 flex items-center justify-between border-t px-2 pt-5 ${
                  isLightNavbar
                    ? "border-black/[0.07]"
                    : "border-white/10"
                }`}
              >
                <div className="flex items-center gap-4">

                  {/* MOBILE WISHLIST */}

                  <button
                    type="button"
                    onClick={() => {
                      handleMobileNavigation();
                      handleWishlistClick();
                    }}
                    className="relative flex items-center gap-2 text-gray-600 transition hover:text-red-600"
                  >
                    <Heart size={17} strokeWidth={1.6} />

                    <span className="text-[10px] font-medium uppercase tracking-[1.5px]">
                      Wishlist
                    </span>

                    {wishlistCount > 0 && (
                      <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF2323] px-1 text-[8px] font-semibold text-white">
                        {wishlistCount > 99 ? "99+" : wishlistCount}
                      </span>
                    )}
                  </button>

                  {/* MOBILE ACCOUNT */}

                  <button
                    type="button"
                    onClick={() => {
                      handleMobileNavigation();
                      handleAccountClick();
                    }}
                    className="flex items-center gap-2 text-gray-600 transition hover:text-red-600"
                  >
                    <UserRound size={17} strokeWidth={1.6} />

                    <span className="text-[10px] font-medium uppercase tracking-[1.5px]">
                      My Account
                    </span>
                  </button>

                </div>

                <button
                  type="button"
                  onClick={() => {
                    handleMobileNavigation();
                    navigate("/contact");
                  }}
                  className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[1.5px] text-gray-400 transition hover:text-red-600"
                >
                  Help
                  <ChevronRight size={13} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </nav>

      {/* SEARCH OVERLAY OUTSIDE NAVBAR */}

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Home Sections
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Categories from "./sections/Categores";
import NewArrivalsSection from "./sections/NewArrivals";
import EditorialBanner from "./sections/EditorialBanner";
import BestSellers from "./sections/BestSellers";
import DealsBundles from "./sections/DealsBundles";
import WhyShopWithUs from "./sections/WhyShopWithUs";
import Reviews from "./sections/Reviews";
import Socialgallery from "./sections/SocialGallery";
import Newsletter from "./sections/Newsletter";
import Footer from "./components/Footer";

// GSAP
import { initGSAPAnimations } from "./animations/gsapanimation";

// Pages
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Signup from "./pages/signup";
import Wishlist from "./pages/wishlist";
import Deals from "./pages/deals&bundles";
import Contact from "./pages/contact";
import Shipping from "./pages/shipping";
import Returns from "./pages/return";
import Faq from "./pages/faqs";
import SizeGuide from "./pages/sizeguide";
import PrivacyPolicy from "./pages/privacypolicy";
import Terms from "./pages/terms";
import NewArrival from "./pages/Newarrivals";
import NotFound from "./pages/NotFound";

function HomePage() {
useEffect(() => {
const cleanup = initGSAPAnimations();


    return cleanup;
}, []);

return (
    <div className="min-h-screen bg-white">

        {/* Hero + Navbar */}
        <div className="relative">
            <HeroSlider />
            <Navbar />
        </div>

        {/* Homepage Sections */}
        <Categories />

        <EditorialBanner />

        <NewArrivalsSection />

        <BestSellers />

        <DealsBundles />

        <WhyShopWithUs />

        <Reviews />

        <Socialgallery />

        <Newsletter />

        <Footer />

    </div>
);


}

function App() {
return ( <Routes>


        {/* ================= HOME ================= */}
        <Route path="/" element={<HomePage />} />


        {/* ================= SHOP ================= */}
        <Route path="/shop" element={<Shop />} />


        {/* ================= PRODUCT ================= */}
        <Route
            path="/product/:id"
            element={<ProductDetail />}
        />


        {/* ================= CART ================= */}
        <Route path="/cart" element={<Cart />} />


        {/* ================= ACCOUNT ================= */}
        <Route path="/account" element={<Account />} />


        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* ================= CHECKOUT ================= */}
        <Route path="/checkout" element={<Checkout />} />

        <Route
            path="/order-success"
            element={<OrderSuccess />}
        />


        {/* ================= WISHLIST ================= */}
        <Route path="/wishlist" element={<Wishlist />} />


        {/* ================= SHOP CATEGORIES ================= */}
        <Route
            path="/deals&bundles"
            element={<Deals />}
        />

        <Route
            path="/new-arrivals"
            element={<NewArrival />}
        />


        {/* ================= SUPPORT ================= */}
        <Route
            path="/contact"
            element={<Contact />}
        />

        <Route
            path="/shipping"
            element={<Shipping />}
        />

        <Route
            path="/returns"
            element={<Returns />}
        />

        <Route
            path="/faqs"
            element={<Faq />}
        />

        <Route
            path="/size-guide"
            element={<SizeGuide />}
        />


        {/* ================= LEGAL ================= */}
        <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
        />

        <Route
            path="/terms"
            element={<Terms />}
        />


        {/* ================= 404 ================= */}
        <Route
            path="*"
            element={<NotFound />}
        />

    </Routes>
);


}

export default App;

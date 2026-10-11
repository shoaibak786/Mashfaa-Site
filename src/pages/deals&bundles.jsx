import Navbar from "../components/Navbar";
import DealsBundles from "../sections/DealsBundles";
import Footer from "../components/Footer";

function DealsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar solid />

      <main className="pt-16">
        <DealsBundles />
      </main>

      <Footer />
    </div>
  );
}

export default DealsPage;
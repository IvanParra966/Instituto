import Navbar from "../container/NavbarContainer/NavbarContainer";
import Footer from "../components/footer/Footer";

const MainLayouts = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
export default MainLayouts;
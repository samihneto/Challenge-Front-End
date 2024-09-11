import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/About/About";

export default function about() {
    return (
        <div>
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
}
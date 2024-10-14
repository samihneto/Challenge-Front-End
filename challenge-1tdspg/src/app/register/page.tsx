import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";
import Register from "../../components/Register/Register";

export default function register() {
    return (
        <div>
            <Header />
        <main>
            <Register />
            <News />
        </main>
        <Footer />
        </div>
    );
}

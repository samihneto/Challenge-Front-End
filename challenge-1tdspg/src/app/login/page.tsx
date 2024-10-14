import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import Login from "../../components/Login/Login";
import News from "../../components/News/News";

export default function login() {
    return (
        <div>
            <Header />
            <main>
                <Login />
                <News />
            </main>
            <Footer />
        </div>
    );
}
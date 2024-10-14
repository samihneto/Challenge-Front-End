import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";
import Recovery from "../../components/Recovery/Recovery";

export default function recovery() {
    return (
        <div>
            <Header />
            <main>
                <Recovery />
                <News />
            </main>
            <Footer />
        </div>
    );
}

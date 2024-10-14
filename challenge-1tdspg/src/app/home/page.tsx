import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import News from "../../components/News/News"

export default function Home() {
    return (
        <div>
            <Header />
            <div>
                <News />
            </div>
            <Footer />
        </div>
    )
}
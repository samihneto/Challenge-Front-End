import News from "../../components/News/News";
import Recovery from "../../components/Recovery/Recovery";

export default function recovery() {
    return (
        <div className="flex justify-center bg-[#00102c]"> 
            <main>
                <Recovery />
                <News />
            </main>
        </div>
    );
}

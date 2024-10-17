import Login from "../../components/Login/Login";
import News from "../../components/News/News";

export default function login() {
    return (
        <div className="flex justify-center bg-[#00102c]">
                <Login />
                <News />
        </div>
    );
}
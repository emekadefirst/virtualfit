import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default WebLayout;
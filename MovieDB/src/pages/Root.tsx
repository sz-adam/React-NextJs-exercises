import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function Root() {
    return (
        <>
            <main>
                <Navigation />
                <Outlet />
            </main>
        </>
    );
}

export default Root;

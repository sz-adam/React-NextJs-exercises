import { NavLink } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";

const Navigation = () => {
    return (
        <header className="bg-gray-800 text-white shadow-lg">
            <nav className=" mx-auto flex items-center p-4">
                {/* Bal oldal */}
                <div className="flex items-center">
                    <NavLink to="/" className="flex items-center">
                        <RiMovie2Line className="text-2xl text-amber-500" />
                        <p className="text-2xl text-amber-500 font-semibold ml-2">MovieDB</p>
                    </NavLink>
                </div>

                {/* Jobb oldal */}
                <ul className="flex space-x-4 text-xl ml-auto">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-yellow-400 font-semibold"
                                    : "text-gray-100 hover:text-white"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-yellow-400 font-semibold"
                                    : "text-gray-100 hover:text-white"
                            }
                        >
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;

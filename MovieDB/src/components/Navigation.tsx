import { NavLink } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";

type Props = {}

const Navigation = (props: Props) => {
    return (
        <header className="bg-gray-800 text-white shadow-lg">
            <nav className=" mx-auto flex items-center p-4">
                {/* Bal oldal */}
                <ul className="flex-1">
                    <li className="text-2xl text-amber-500">
                        <NavLink
                            to="/"
                        >
                            <div className="flex items-center">
                                <RiMovie2Line />  <p className="font-semibold">MovieDB</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>

                {/* Jobb oldal */}
                <ul className="flex space-x-4 text-xl">
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

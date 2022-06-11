import { faMagnifyingGlass, faSailboat } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { navigation } from "../routing";

export const TopNav = () => {
    return (
        <nav className="border border-gray-300 px-8 flex items-center">
            <ul className="flex items-center">
                <li className="mr-16">
                    <NavLink to="/" className="flex items-center">
                        <FontAwesomeIcon icon={faSailboat} size="2x" className="mr-2 text-blue-500" />

                        <span className="text-2xl font-semibold font-quicksand">rudder</span>
                        <span className="text-2xl font-semibold text-blue-500 font-quicksand">ui</span>
                    </NavLink>
                </li>
                {navigation.map(({ icon, name, to }) => (
                    <li key={to}>
                        <NavLink to={to}>
                            <FontAwesomeIcon icon={icon} size="lg" className="mr-2 text-gray-500" fixedWidth />

                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <form className="w-1/4 flex ml-auto" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                    Search
                </label>

                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    </div>

                    <input
                        id="search-field"
                        className="block w-full h-full pl-8 pr-3 py-8 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                    />
                </div>
            </form>
        </nav>
    );
}

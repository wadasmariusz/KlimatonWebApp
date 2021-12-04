import { Link } from "react-router-dom";
import logo from "../../assets/img/city-200.png";

const Header = () => {
  return (
    <header className="text-black bg-white dark:text-gray-400 dark:bg-gray-900 body-font">
      <div className="mx-auto flex flex-wrap px-8 py-5 flex-col md:flex-row items-end">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 w-60">
          <img src={logo} alt="Conected City" />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className="mr-5 dark:hover:text-white hover:text-gray-700"
          >
            Strona główna
          </Link>
          <Link
            to="/map"
            className="mr-5 dark:hover:text-white hover:text-gray-700"
          >
            Mapa zagrożeń
          </Link>
        </nav>
        <Link
          to="/auth/login"
          type="button"
          className="rounded px-5 py-2.5 overflow-hidden group bg-yellow-500 relative hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Zaloguj się</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

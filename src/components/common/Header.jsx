import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-black bg-white dark:text-gray-400 dark:bg-gray-900 body-font">
      <div className="mx-auto flex flex-wrap px-8 py-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-black dark:text-gray-100 ml-3 text-xl">
            ThreatMap
          </span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className="mr-5 dark:hover:text-white hover:text-gray-700"
          >
            Strona główna
          </Link>
          <Link
            to="/"
            className="mr-5 dark:hover:text-white hover:text-gray-700"
          >
            Mapa zagrożeń
          </Link>
          <Link
            to="/"
            className="mr-5 dark:hover:text-white hover:text-gray-700"
          >
            Pomoc
          </Link>
        </nav>
        <Link
          to="/auth/login"
          type="button"
          className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Zaloguj się</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

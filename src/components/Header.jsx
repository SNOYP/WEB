export default function Header({ systemName, toggleMenu }) {
    return (
        <header className="bg-aqua-coral dark:bg-black h-20 flex items-center justify-center shadow-md transition-colors duration-300 relative">
            <button
                onClick={toggleMenu}
                className="absolute left-6 lg:hidden text-2xl text-black dark:text-white"
            >
                <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white transition-colors duration-300 text-center px-12">
                {systemName}
            </h1>
        </header>
    );
}
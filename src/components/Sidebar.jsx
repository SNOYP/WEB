import { useState } from 'react';

export default function Sidebar({ activePage, setActivePage, toggleTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { id: 'home', name: 'Головна', icon: 'fa-house' },
        { id: 'ph', name: 'Рівень pH', icon: 'fa-droplet' },
        { id: 'temp', name: 'Температура', icon: 'fa-temperature-half' },
        { id: 'filter', name: 'Фільтр', icon: 'fa-filter' },
        { id: 'light', name: 'Освітлення', icon: 'fa-lightbulb' }
    ];

    const handlePageChange = (id) => {
        setActivePage(id);
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-aqua-coral text-white shadow-md z-50 sticky top-0">
                <h1 className="text-lg font-bold">Акваріум</h1>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
                    <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Sidebar Overlay (Mobile) */}
            {isMobileMenuOpen && (
                <div onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"></div>
            )}

            {/* Sidebar Content */}
            <aside className={`w-64 fixed h-full flex flex-col z-40 transition-all duration-300 ease-in-out top-0 lg:top-0 lg:left-0 
        ${isMobileMenuOpen ? 'left-0' : '-left-64'}
        bg-white lg:border-r lg:border-gray-200 lg:shadow-xl dark:bg-aqua-dark dark:border-r dark:border-gray-700 dark:text-white`}>

                {/* Navigation */}
                <nav className="flex-1 pt-8 lg:pt-16 px-4 space-y-2">
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handlePageChange(link.id)}
                            className={`w-full flex items-center gap-3 p-3 font-semibold rounded-lg transition-colors
                ${activePage === link.id
                                ? 'bg-aqua-teal text-white shadow-inner'
                                : 'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            <i className={`fa-solid ${link.icon} w-6 text-center text-lg`}></i> {link.name}
                        </a>
                    ))}
                </nav>

                {/* Theme Toggle Button */}
                <div className="p-8 flex justify-center">
                    <button onClick={toggleTheme} className="text-3xl text-gray-900 dark:text-white hover:scale-110 transition">
                        <i className="fa-regular fa-lightbulb"></i>
                    </button>
                </div>
            </aside>
        </>
    );
}
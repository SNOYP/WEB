export default function Sidebar({ activePage, setActivePage, toggleTheme }) {
    const links = [
        { id: 'home', name: 'Головна', icon: 'fa-house' },
        { id: 'ph', name: 'Рівень pH', icon: 'fa-droplet' },
        { id: 'temp', name: 'Температура', icon: 'fa-temperature-half' },
        { id: 'filter', name: 'Фільтр', icon: 'fa-filter' },
        { id: 'light', name: 'Освітлення', icon: 'fa-lightbulb' }
    ];

    return (
        <aside className="w-64 bg-aqua-teal dark:bg-aqua-dark fixed h-full text-white flex flex-col z-40 hidden lg:flex">
            <nav className="flex-1 pt-8 px-4 space-y-2">
                {links.map(link => (
                    <button
                        key={link.id}
                        onClick={() => setActivePage(link.id)}
                        className={`w-full flex items-center gap-3 p-3 font-semibold rounded-lg transition ${activePage === link.id ? 'bg-black/20' : 'hover:bg-black/10'}`}
                    >
                        <i className={`fa-solid ${link.icon} w-6 text-center`}></i> {link.name}
                    </button>
                ))}
            </nav>
            <div className="p-8 flex justify-center">
                <button onClick={toggleTheme} className="text-3xl hover:scale-110 transition"><i className="fa-regular fa-lightbulb"></i></button>
            </div>
        </aside>
    );
}
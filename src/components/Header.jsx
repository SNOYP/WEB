export default function Header({ activePage }) {
    const titles = {
        home: 'Система керування акваріумом',
        ph: 'Рівень pH',
        temp: 'Температура води',
        filter: 'Фільтри',
        light: 'Освітлення'
    };

    return (
        <header className="bg-aqua-coral dark:bg-black h-20 flex items-center justify-center shadow-md sticky top-0 lg:top-0 z-10">
            <h1 className="text-xl md:text-2xl font-bold text-white transition-colors">{titles[activePage]}</h1>
        </header>
    );
}
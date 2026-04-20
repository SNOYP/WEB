import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import PHPage from './pages/PHPage';
import TempPage from './pages/TempPage';
import FilterPage from './pages/FilterPage';
import LightPage from './pages/LightPage';

export default function App() {
    const [activePage, setActivePage] = useState('home');
    const [darkMode, setDarkMode] = useState(false);
    const [temp, setTemp] = useState(24.2);
    const [ph, setPh] = useState(7.2);

    useEffect(() => {
        const timer = setInterval(() => {
            setTemp(+(24.0 + Math.random() * 1.5).toFixed(1));
            setPh(+(7.0 + Math.random() * 0.5).toFixed(1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const renderPage = () => {
        switch(activePage) {
            case 'home': return <Home temp={temp} ph={ph} />;
            case 'ph': return <PHPage ph={ph} />;
            case 'temp': return <TempPage temp={temp} />;
            case 'filter': return <FilterPage />;
            case 'light': return <LightPage />;
            default: return <Home temp={temp} ph={ph} />;
        }
    };

    return (
        <div className="flex min-h-screen text-black dark:text-white">
            <Sidebar activePage={activePage} setActivePage={setActivePage} toggleTheme={() => setDarkMode(!darkMode)} />
            <div className="flex-1 lg:ml-64 flex flex-col">
                <Header activePage={activePage} />
                <main className="p-4 md:p-8">{renderPage()}</main>
            </div>
        </div>
    );
}
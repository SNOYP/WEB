import SensorCard from '../components/SensorCard';

export default function Home({ temp, ph }) {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <section className="text-center">
                <h2 className="text-2xl font-bold mb-8">Моніторинг показників</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SensorCard label="Температура" value={temp} unit="°C" icon="fa-temperature-half" />
                    <SensorCard label="Рівень pH" value={ph} unit="pH" icon="fa-droplet" />
                    <SensorCard label="Освітлення" value={75} unit="%" icon="fa-lightbulb" />
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-bold mb-8">Графік та історія годування</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {['08:00', '14:00', '20:00'].map(time => (
                        <div key={time} className="space-y-4">
                            <button className="bg-aqua-coral text-black font-bold text-3xl py-4 rounded-[2rem] w-full">{time}</button>
                            <div className="bg-gray-800 p-4 rounded-2xl flex justify-between items-center text-white">
                                <span>14.02</span>
                                <span>{time === '14:00' ? 'Пропущено' : 'Нагодовано'}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-800 p-8 rounded-3xl text-left">
                    <h3 className="text-xl font-bold mb-6">Налаштування системи</h3>
                    <div className="space-y-4">
                        <label className="block text-sm">Назва системи</label>
                        <input type="text" value="Система керування акваріумом" className="w-full bg-black p-3 rounded-lg border border-gray-700" readOnly />
                        <label className="block text-sm">Інтервал опитування (мс)</label>
                        <input type="number" value="1000" className="w-full bg-black p-3 rounded-lg border border-gray-700" readOnly />
                        <button className="bg-aqua-coral px-6 py-2 rounded-xl font-bold text-black">Зберегти налаштування</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
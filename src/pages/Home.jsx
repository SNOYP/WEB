import SensorCard from '../components/SensorCard';

export default function Home({ temp, ph }) {
    return (
        <div className="max-w-6xl mx-auto space-y-12 transition-colors duration-300">
            <section className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">Моніторинг показників</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SensorCard label="Температура" value={temp} unit="°C" icon="fa-temperature-half" />
                    <SensorCard label="Рівень pH" value={ph} unit="pH" icon="fa-droplet" />
                    <SensorCard label="Освітлення" value={75} unit="%" icon="fa-lightbulb" />
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">Графік та історія годування</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {['08:00', '14:00', '20:00'].map((time, index) => (
                        <div key={time} className="space-y-4">
                            <button className="bg-aqua-coral text-white font-bold text-3xl py-4 rounded-[2rem] w-full shadow-lg hover:brightness-110 transition">{time}</button>
                            {/* Сірі ячейки у світлій темі, темні у темній. Текст кольоровий. */}
                            <div className="p-4 rounded-2xl flex justify-between items-center transition-colors bg-gray-100 dark:bg-aqua-dark shadow-sm">
                                <span className="font-semibold text-gray-900 dark:text-white">14.02</span>
                                <span className={`font-bold ${index === 1 ? 'text-red-500' : 'text-green-500'}`}>
                  {index === 1 ? 'Пропущено' : 'Нагодовано'}
                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Блок налаштувань адаптовано під світлу тему */}
                <div className="bg-white dark:bg-aqua-dark p-8 rounded-3xl text-left shadow-lg border border-gray-100 dark:border-none transition-colors">
                    <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">Налаштування системи</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4">
                        <div className="md:col-span-2 space-y-3">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Назва системи</label>
                            <input type="text" value="Система керування акваріумом" className="w-full bg-gray-50 dark:bg-black p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition-colors" readOnly />
                        </div>
                        <div className="space-y-3 md:order-last">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Інтервал опитування (мс)</label>
                            <input type="number" value="1000" className="w-full bg-gray-50 dark:bg-black p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition-colors" readOnly />
                        </div>
                        <button className="md:col-start-1 md:self-end bg-aqua-coral px-6 py-2 rounded-xl font-bold text-white h-12 shadow-md hover:shadow-lg transition self-start">Зберегти налаштування</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
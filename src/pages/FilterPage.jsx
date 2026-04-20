export default function FilterPage() {
    const logs = [
        {n: 'Біофільтр', v: '95%', i: 'fa-leaf'},
        {n: 'Механічний', v: '400 л/год', i: 'fa-droplet'},
        {n: 'Тонка очистка', v: '200 л/год', i: 'fa-bubbles'},
        {n: 'Обслуговування', v: 'через 10 днів', i: 'fa-gear'}
    ];
    return (
        <div className="max-w-2xl mx-auto space-y-8 pt-10 transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-extrabold space-y-6 text-gray-900 dark:text-white transition-colors">
                <p>Очищення: <span className="text-aqua-coral">95%</span></p>
                <p>Потік: <span className="text-aqua-teal">400 л/год</span></p>
            </div>
            <hr className="border-gray-200 dark:border-gray-700 border-2 rounded-full transition-colors" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Сервіс лог</h3>
            <ul className="space-y-6">
                {logs.map(log => (
                    <li key={log.n} className="flex items-center gap-6 text-2xl font-semibold transition-colors
            text-gray-900 dark:text-gray-100">
                        <div className="w-16 h-16 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg transition-colors">
                            <i className={`fa-solid ${log.i} text-aqua-teal text-2xl`}></i>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors">
              {log.n}: <span className="font-extrabold text-gray-900 dark:text-white transition-colors">{log.v}</span>
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
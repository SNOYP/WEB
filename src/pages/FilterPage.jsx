export default function FilterPage() {
    const logs = [
        {n: 'Біофільтр', v: '95%', i: 'fa-leaf'},
        {n: 'Механічний', v: '400 л/год', i: 'fa-droplet'},
        {n: 'Тонка очистка', v: '200 л/год', i: 'fa-bubbles'},
        {n: 'Обслуговування', v: 'через 10 днів', i: 'fa-gear'}
    ];
    return (
        <div className="max-w-2xl mx-auto space-y-8 pt-10">
            <div className="text-4xl font-bold space-y-4">
                <p>Очищення: <span className="text-aqua-coral">95%</span></p>
                <p>Потік: <span className="text-aqua-teal">400 л/год</span></p>
            </div>
            <hr className="border-gray-700 border-2 rounded-full" />
            <h3 className="text-2xl font-bold">Сервіс лог</h3>
            <ul className="space-y-6">
                {logs.map(log => (
                    <li key={log.n} className="flex items-center gap-6 text-2xl font-semibold">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-inner">
                            <i className={`fa-solid ${log.i} text-aqua-teal text-xl`}></i>
                        </div>
                        {log.n}: {log.v}
                    </li>
                ))}
            </ul>
        </div>
    );
}
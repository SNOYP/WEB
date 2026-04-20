import React from 'react';

export default function TempPage({ temp }) {
    // История показаний
    const history = [
        { t: '00:00', v: 24.2 }, { t: '04:00', v: 24.0 }, { t: '08:00', v: 24.5 },
        { t: '12:00', v: 25.1 }, { t: '16:00', v: 25.3 }, { t: '20:00', v: 24.9 }
    ];

    // Функция перевода температуры в координаты Y (27°C -> 0px, 23°C -> 300px)
    const getY = (val) => (27 - val) * 75;
    const currentY = getY(temp);

    // Массив точек для построения кривой
    const points = [
        { x: 0, y: getY(24.2) },
        { x: 100, y: getY(24.0) },
        { x: 200, y: getY(24.5) },
        { x: 300, y: getY(25.1) },
        { x: 400, y: getY(25.3) },
        { x: 500, y: currentY } // Эта точка динамическая
    ];

    // Генерация строки пути для плавной кривой Безье
    const d = `M ${points[0].x} ${points[0].y} ` +
        points.slice(1).map((p, i) => {
            const prev = points[i];
            const cx1 = prev.x + (p.x - prev.x) / 2;
            const cy1 = prev.y;
            const cx2 = prev.x + (p.x - prev.x) / 2;
            const cy2 = p.y;
            return `C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p.x} ${p.y}`;
        }).join(' ');

    return (
        <div className="flex flex-col xl:flex-row gap-10 max-w-6xl mx-auto items-center transition-colors duration-300">

            {/* Левая панель: Список истории */}
            <div className="w-full max-w-sm space-y-4">
                <div className="bg-white dark:bg-aqua-dark border-2 border-aqua-teal p-4 rounded-full flex justify-between font-bold text-gray-900 dark:text-white shadow-sm transition-colors">
                    <span>Поточна:</span>
                    <span className="text-aqua-teal font-extrabold">{temp}°C</span>
                </div>

                {history.map(item => (
                    <div key={item.t} className="bg-gray-100 dark:bg-aqua-dark p-4 rounded-full flex justify-between text-gray-900 dark:text-gray-100 shadow-sm transition-colors">
                        <span className="font-medium text-gray-700 dark:text-gray-400">{item.t}</span>
                        <span className="font-bold">{item.v}°C</span>
                    </div>
                ))}
            </div>

            {/* Правая панель: График */}
            <div className="flex-1 bg-white border border-gray-200 dark:bg-aqua-cardDark dark:border-none p-6 md:p-10 rounded-3xl w-full flex shadow-lg transition-colors overflow-hidden">

                {/* Шкала Y */}
                <div className="flex flex-col justify-between text-gray-400 pr-4 md:pr-6 pb-8 font-medium text-sm md:text-base">
                    <span>27°C</span><span>26°C</span><span>25°C</span><span>24°C</span><span>23°C</span>
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="relative w-full h-[250px] md:h-[300px] border-l-2 border-b-2 border-gray-200 dark:border-gray-700">
                        <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">

                            {/* Сетка */}
                            <g stroke="currentColor" className="text-gray-100 dark:text-gray-800 transition-colors" strokeWidth="1" strokeDasharray="4">
                                {[0, 75, 150, 225].map(y => (
                                    <line key={y} x1="0" y1={y} x2="500" y2={y} />
                                ))}
                            </g>

                            {/* Градиентная заливка */}
                            <defs>
                                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FF7D4A" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#FF7D4A" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Область под графиком (с переходом) */}
                            <path
                                d={`${d} L 500 300 L 0 300 Z`}
                                fill="url(#grad)"
                                style={{ transition: 'all 1s ease-in-out' }}
                            />

                            {/* Плавная линия графика (с переходом для атрибута d) */}
                            <path
                                d={d}
                                fill="none"
                                className="stroke-aqua-coral dark:stroke-aqua-coralDark"
                                strokeWidth="4"
                                strokeLinecap="round"
                                style={{ transition: 'all 1s ease-in-out' }}
                            />

                            {/* Точки на графике */}
                            <g className="fill-white dark:fill-aqua-dark stroke-aqua-coral dark:stroke-aqua-coralDark transition-colors" strokeWidth="3">
                                {points.map((p, i) => (
                                    <circle
                                        key={i}
                                        cx={p.x}
                                        cy={p.y}
                                        r={i === points.length - 1 ? 8 : 5}
                                        className={i === points.length - 1 ? "fill-aqua-coral animate-pulse" : ""}
                                        style={{ transition: 'all 1s ease-in-out' }}
                                    />
                                ))}
                            </g>
                        </svg>
                    </div>

                    {/* Шкала X */}
                    <div className="relative w-full h-8 mt-4 text-gray-400 font-medium text-xs md:text-sm">
                        <span className="absolute left-[0%] -translate-x-1/2">00:00</span>
                        <span className="absolute left-[20%] -translate-x-1/2">04:00</span>
                        <span className="absolute left-[40%] -translate-x-1/2">08:00</span>
                        <span className="absolute left-[60%] -translate-x-1/2">12:00</span>
                        <span className="absolute left-[80%] -translate-x-1/2">16:00</span>
                        <span className="absolute left-[100%] -translate-x-1/2 font-bold text-aqua-teal">Зараз</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
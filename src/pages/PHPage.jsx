export default function PHPage({ ph }) {
    const minPh = 0;
    const maxPh = 14;

    // Calculate pointer position percentage (0 to 100)
    const pointerPosition = ((ph - minPh) / (maxPh - minPh)) * 100;

    return (
        <div className="flex flex-col items-center justify-center py-20 transition-colors duration-300">
            <div className="text-[120px] font-bold text-emerald-500 dark:text-emerald-400 transition-colors">
                {ph} <span className="text-5xl text-gray-900 dark:text-white transition-colors">pH</span>
            </div>

            <div className="w-full max-w-2xl mt-16 px-6 relative">
                {/* Перевернута стрілочка, що вказує вниз */}
                <div className="absolute -top-6 w-full max-w-[calc(100%-48px)] h-8 z-10">
                    <div style={{ left: `${pointerPosition}%` }} className="absolute -translate-x-1/2 transition-all duration-500 ease-in-out">
                        {/* Трикутник вершиною вниз */}
                        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[18px] border-t-gray-900 dark:border-t-white drop-shadow-md"></div>
                    </div>
                </div>

                {/* pH segmented color bar matching user's concept, now factual */}
                <div className="flex h-16 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-800 shadow-inner">
                    <div className="bg-red-600 w-1/5"></div>
                    <div className="bg-orange-500 w-1/5"></div>
                    <div className="bg-yellow-400 w-1/5"></div>
                    <div className="bg-lime-500 w-1/5"></div>
                    <div className="bg-green-600 w-1/5"></div>
                </div>

                {/* Scale labels */}
                <div className="flex justify-between mt-4 font-bold text-xl text-gray-900 dark:text-gray-100 transition-colors">
                    <span>Кислотне</span>
                    <span>Лужне</span>
                </div>
            </div>
        </div>
    );
}
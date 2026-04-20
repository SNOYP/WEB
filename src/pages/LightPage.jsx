export default function LightPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-12 pt-10 transition-colors duration-300">

            {/* Світлий блок у світлій темі, темний у темній */}
            <div className="bg-white dark:bg-aqua-dark border border-gray-100 dark:border-none p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 shadow-lg transition-colors">
                <div className="flex flex-col items-center gap-6 md:order-last">
                    <div className="w-24 h-12 bg-aqua-teal rounded-full relative shadow-inner">
                        <div className="absolute right-1 top-1 w-10 h-10 bg-white rounded-full shadow-md"></div>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors">Стан: Увімкнутий</span>
                </div>
                <div className="flex-1 w-full flex flex-col gap-6">
                    <input type="range" className="w-full h-4 rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-700 accent-aqua-coral" defaultValue="75" />
                    <span className="text-xl font-medium text-right text-gray-700 dark:text-gray-100 transition-colors">
            Інтенсивність: <span className="font-extrabold text-gray-900 dark:text-white">75%</span>
          </span>
                </div>
            </div>

            {/* Світлий блок у світлій темі */}
            <div className="bg-white dark:bg-aqua-dark border border-gray-100 dark:border-none p-12 rounded-3xl flex flex-col items-center gap-10 shadow-lg transition-colors">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors">Плановий цикл світанок-захід</h3>

                {/* Графік циклу */}
                <div className="relative w-72 h-72 rounded-full shadow-lg border-4 border-gray-100 dark:border-gray-700" style={{background: 'conic-gradient(#eab308 0% 55%, #38bdf8 55% 100%)'}}>
                    <div className="absolute inset-4 rounded-full bg-white dark:bg-aqua-dark flex items-center justify-center font-bold text-lg text-gray-900 dark:text-white transition-colors shadow-inner">
                        Цикл
                    </div>
                    {/* Підписи зовні */}
                    <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-700 dark:text-gray-100 transition-colors">День</span>
                    <span className="absolute -right-20 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-700 dark:text-gray-100 transition-colors">Ніч</span>
                </div>
            </div>
        </div>
    );
}
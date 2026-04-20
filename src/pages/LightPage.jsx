export default function LightPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-10">
            <div className="bg-black p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-10 bg-aqua-teal rounded-full relative">
                        <div className="absolute right-1 top-1 w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">Стан: Увімкнутий</span>
                </div>
                <div className="flex-1 w-full flex flex-col gap-4">
                    <input type="range" className="w-full h-4 rounded-lg appearance-none cursor-pointer" defaultValue="75" />
                    <span className="text-xl font-medium text-right">Інтенсивність: 75%</span>
                </div>
            </div>
            <div className="bg-black p-12 rounded-3xl flex flex-col items-center gap-8">
                <h3 className="text-xl font-bold">Плановий цикл світанок-захід</h3>
                <div className="w-64 h-64 rounded-full relative" style={{background: 'conic-gradient(#eab308 0% 55%, #38bdf8 55% 100%)'}}>
                    <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-xl">День</span>
                    <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-xl">Ніч</span>
                </div>
            </div>
        </div>
    );
}
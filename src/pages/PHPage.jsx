export default function PHPage({ ph }) {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="text-[120px] font-bold text-emerald-400">{ph} <span className="text-5xl text-white">pH</span></div>
            <div className="w-full max-w-2xl mt-10">
                <div className="flex h-16 rounded-full overflow-hidden border-4 border-gray-800">
                    <div className="bg-red-600 w-1/5"></div>
                    <div className="bg-orange-500 w-1/5"></div>
                    <div className="bg-yellow-400 w-1/5"></div>
                    <div className="bg-lime-500 w-1/5"></div>
                    <div className="bg-green-600 w-1/5"></div>
                </div>
                <div className="flex justify-between mt-4 font-bold text-xl"><span>Кислотне</span><span>Лужне</span></div>
            </div>
        </div>
    );
}
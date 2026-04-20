export default function TempPage({ temp }) {
    const history = [
        {t: '00:00', v: '24.2'}, {t: '04:00', v: '24.0'}, {t: '08:00', v: '24.5'},
        {t: '12:00', v: '25.1'}, {t: '16:00', v: '25.3'}, {t: '20:00', v: '24.9'}
    ];
    return (
        <div className="flex flex-col xl:flex-row gap-10 max-w-6xl mx-auto items-center">
            <div className="w-full max-w-sm space-y-4">
                <div className="bg-black border-2 border-aqua-teal p-4 rounded-full flex justify-between font-bold">
                    <span>Поточна:</span><span className="text-aqua-teal">{temp}°C</span>
                </div>
                {history.map(item => (
                    <div key={item.t} className="bg-gray-800 p-4 rounded-full flex justify-between">
                        <span>{item.t}</span><span>{item.v}°C</span>
                    </div>
                ))}
            </div>
            <div className="flex-1 bg-aqua-cardDark p-10 rounded-3xl w-full h-[400px] flex items-center justify-center">
                <div className="text-gray-400 text-xl">[Графік температури]</div>
            </div>
        </div>
    );
}
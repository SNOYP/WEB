export default function SensorCard({ label, value, unit, icon, isWarning }) {
    return (
        <div className={`p-6 rounded-3xl shadow-lg flex flex-col items-center justify-center transition-all duration-500 border-2 ${
            isWarning
                ? 'bg-red-500 border-red-600 text-white animate-pulse'
                : 'bg-gray-100 dark:bg-aqua-cardDark border-transparent text-black dark:text-white'
        }`}>
            <div className="text-4xl mb-4">
                <i className={`fa-solid ${icon}`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{label}</h3>
            <div className="text-3xl font-bold">
                {value} <span className="text-xl">{unit}</span>
            </div>
            {isWarning && (
                <span className="mt-2 text-xs font-bold uppercase tracking-wider">Увага: Критичний стан</span>
            )}
        </div>
    );
}
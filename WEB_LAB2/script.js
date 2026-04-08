document.addEventListener('DOMContentLoaded', () => {

    let updateInterval = localStorage.getItem('updateInterval') || 3000;
    let systemName = localStorage.getItem('systemName') || 'Система керування акваріумом';

    const titleElement = document.getElementById('system-title');
    if (titleElement) titleElement.textContent = systemName;

    const phElement = document.getElementById('current-ph');
    const phArrow = document.getElementById('ph-arrow');
    const tempElement = document.getElementById('current-temp');
    const targetStatusBlock = document.getElementById('target-status-block');

    const tempLine = document.getElementById('temp-graph-line');
    const tempDot = document.getElementById('temp-graph-last-point');

    function getPHGoodnessColor(ph) {
        const value = parseFloat(ph);
        if (value < 6.0 || value > 8.0) return '#EF4444';
        if ((value >= 6.0 && value < 6.5) || (value > 7.5 && value <= 8.0)) return '#FBBF24';
        if (value >= 6.5 && value <= 7.5) return '#10B981';
        return 'inherit';
    }

    function updateSensors() {
        if (phElement && phArrow) {
            const ph = (7.0 + Math.random() * 0.5).toFixed(1);
            phElement.textContent = ph;

            const phColor = getPHGoodnessColor(ph);
            phElement.style.color = phColor;

            if (targetStatusBlock) {
                targetStatusBlock.style.backgroundColor = phColor;
            }

            let percent = ((parseFloat(ph) - 5.0) / (9.0 - 5.0)) * 100;
            if (percent < 0) percent = 0;
            if (percent > 95) percent = 95;
            phArrow.style.left = percent + '%';
        }

        if (tempElement) {
            const temp = (24.0 + Math.random() * 1.5).toFixed(1);
            tempElement.textContent = `${temp}°C`;

            if (tempLine && tempDot) {
                const newY = (27 - parseFloat(temp)) * 75;
                tempDot.setAttribute('cy', newY);
                tempLine.setAttribute('y2', newY);
            }
        }
    }

    let sensorTimer = setInterval(updateSensors, updateInterval);
    updateSensors();

    const feedBtn = document.getElementById('manual-feed-btn');
    if (feedBtn) {
        feedBtn.addEventListener('click', () => {
            const now = new Date();
            const dateStr = now.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit' });
            const timeStr = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const currentHour = now.getHours();

            let targetContainerId = 'feed-log-08';
            if (currentHour >= 8 && currentHour < 14) {
                targetContainerId = 'feed-log-14';
            } else if (currentHour >= 14 && currentHour < 20) {
                targetContainerId = 'feed-log-20';
            } else {
                targetContainerId = 'feed-log-08';
            }

            const targetContainer = document.getElementById(targetContainerId);

            if (targetContainer) {
                const newLog = document.createElement('div');
                newLog.className = 'flex justify-between items-center bg-white dark:bg-black p-4 rounded-xl shadow border-l-4 border-blue-500 transition-colors mb-4';
                newLog.innerHTML = `
                    <div class="flex flex-col">
                        <span class="font-bold text-sm md:text-base">${dateStr}</span>
                        <span class="font-bold text-xs md:text-sm text-gray-500">${timeStr}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="font-medium hidden xl:block text-sm md:text-base text-blue-500">Ручне годування</span>
                        <i class="fa-solid fa-fish text-blue-500 text-xl md:text-2xl"></i>
                    </div>
                `;
                targetContainer.prepend(newLog);
            }
        });
    }

    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.elements['systemName'].value = systemName;
        settingsForm.elements['updateInterval'].value = updateInterval;

        settingsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(settingsForm);
            const newName = formData.get('systemName');
            const newInterval = parseInt(formData.get('updateInterval'), 10);

            if (newInterval < 1000 || newInterval > 10000) {
                alert('Помилка: Інтервал оновлення має бути від 1000 до 10000 мс!');
                return;
            }

            localStorage.setItem('systemName', newName);
            localStorage.setItem('updateInterval', newInterval);
            if (titleElement) titleElement.textContent = newName;

            clearInterval(sensorTimer);
            sensorTimer = setInterval(updateSensors, newInterval);

            const successMsg = document.getElementById('settings-success');
            successMsg.classList.remove('hidden');
            setTimeout(() => { successMsg.classList.add('hidden'); }, 3000);
        });
    }
});
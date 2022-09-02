let currentYear = 2022;
let months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]
let weekDays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
]

const calendar = document.querySelector('.calendar');

months.forEach((month, idx) => {
	monthsHTML += `<div class="months month_${idx}">
        <h3>${month}</h3>
        <div class="week_days_container">
            ${weekDays
				.map(day => `<div class="week_days">${day}</div>`)
				.join('')}
        </div>
        <div class="days_container"></div>
    </div>`;
});
calendar.innerHTML = monthsHTML;
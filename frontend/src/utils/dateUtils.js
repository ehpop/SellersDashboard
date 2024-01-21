export function getDatesForWeek(weekNumber, year) {
    const dates = [];

    // Calculate the first day of the week (Monday) for the given week and year
    const januaryFirst = new Date(year, 0, 1);
    const daysToMonday = (8 - januaryFirst.getDay()) % 7;
    const firstMonday = new Date(year, 0, daysToMonday + 1 + (weekNumber - 1) * 7);

    // Generate dates for each day of the week
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(firstMonday);
        currentDate.setDate(firstMonday.getDate() + i);
        dates.push(currentDate);
    }

    return dates;
}

export function getFirstDayOfWeek(weekNumber, year) {
    const januaryFirst = new Date(year, 0, 1);
    const daysToMonday = (8 - januaryFirst.getDay()) % 7;
    const firstMonday = new Date(year, 0, daysToMonday + 1 + (weekNumber - 1) * 7);

    return firstMonday;
}

export function getCurrentWeekNumber() {
    return new Date().getWeek();
}

export function getWeekNumber(date) {
    return date.getWeek();
}

/**
 * Custom function, that returns number of day in the week
 * (0 - Monday, 1 - Tuesday, ..., 6 - Sunday)
 *
 * @param date
 * @returns {number} number of day in the week
 */
export function getWeekDay(date) {
    return date.getDay() === 0 ? 6 : date.getDay() - 1;
}

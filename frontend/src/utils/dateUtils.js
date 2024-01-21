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

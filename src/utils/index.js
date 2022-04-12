export const getNextDay = (date1, num = 1) => {
    return new Date((1000 * 60 * 60 * 24) * num + date1.valueOf());
}

export const getNextDayStr = (date1, num = 1) => {
    let d2 = getNextDay(date1, num);
    return `${d2.getMonth() + 1}月${d2.getDate()}日`
}

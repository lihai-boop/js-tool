export default (ms: Date | number = Date.now()) => {
    let isDate = ms instanceof Date
    let isNumber = typeof ms === 'number'
    if (!isDate && !isNumber) {
        return
    }
    isNumber && (ms = new Date(ms))
    ms = ms as Date;
    return {
        year: ms.getFullYear(),
        month: ms.getMonth(),
        date: ms.getDate(),
        hours: ms.getHours(),
        minutes: ms.getMinutes(),
        seconds: ms.getSeconds(),
        day: ms.getDay()
    }
}
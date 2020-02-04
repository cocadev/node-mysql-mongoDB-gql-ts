const padWithZero = number => {
    const string = number.toString();
    if (number < 10) {
      return '0' + string;
    }
    return string;
};

export default class UtilService {
    static startTime(year, month, day) {
        if(month < 0){
            month = month + 12;
            year = year - 1;
        }
        return year + "-" + padWithZero(month + 1) + "-" + padWithZero(day) + "T00:00:00.000Z"
    }
    static endTime(year, month, day) {
        if(month < 0){
            month = month + 12;
            year = year - 1;
        }
        return year + "-" + padWithZero(month + 1) + "-" + padWithZero(day) + "T23:59:59.000Z"
    }
}
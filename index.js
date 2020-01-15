/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

    // Получаем из переданной в date строки объект-дату и распарсиваем его

    console.log('Полученная дата' + date);

    var dateParse = new Date(Date.parse(date));

    console.log('Преобразованная дата' + dateParse);

    function add(variableNumber, variableCategory) {
        switch (variableCategory) {
            case ('years') : {
                //изменяю variableCategory  и прибавляю к текущему её значению variableNumber
                dateParse.setFullYear(dateParse.getFullYear() + variableNumber);

                console.log('Измененная дата, функция add' + dateParse);
                return dateParse;
            }
            case ('months') : {
                dateParse.setMonth(dateParse.getMonth() + variableNumber);

                console.log('Измененная дата, функция add' + dateParse);
                return dateParse;
            }
            case ('days') : {
                dateParse.setDate(dateParse.getDate() + variableNumber);

                console.log('Измененная дата, функция add' + dateParse);
                return dateParse;
            }
            case('hours') : {
                dateParse.setHours(dateParse.getHours() + variableNumber);

                console.log('Измененная дата, функция add' + dateParse);
                return dateParse;
            }
            case('minutes') : {
                dateParse.setSeconds(dateParse.getSeconds() + variableNumber);

                console.log('Измененная дата, функция add' + dateParse);
                return dateParse;
            }
        }
    }
};

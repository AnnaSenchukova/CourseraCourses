// Телефонная книга
var phoneBook = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    const requestParams = parseRequestParams(command);

    switch (requestParams.commandKey) {
        case ("ADD") : {
            performAddCommand(requestParams);
            break;
        }
        case ("SHOW") : {
            return performShowCommand(requestParams);
        }
        case ("REMOVE_PHONE") : {
            //return performRemovePhoneCommand(requestParams);
            var removeResult = false;
            removeResult = performRemovePhoneCommand(requestParams);
            //console.log("removeResult = |" + removeResult + "|");
            return removeResult;
        }
    }
};


function parseRequestParams(command) {
    var arrayParametrs = command.split(' ');

    if (arrayParametrs[0] == 'REMOVE_PHONE') {
        return {
            commandKey: arrayParametrs[0].toString(),
            contactNumbers: arrayParametrs[1] ? arrayParametrs[1].split(",") : null
        }

    } else {
        return {
            commandKey: arrayParametrs[0].toString(),
            contactName: arrayParametrs[1] ? arrayParametrs[1].toString() : "",
            contactNumbers: arrayParametrs[2] ? arrayParametrs[2].split(",") : null
        }

    }
}

function getContactByName(contactName) {

    for (var i = 0; i < phoneBook.length; i++) {
        var currentContact = phoneBook[i];
        if (currentContact.contactName == contactName) {
            return currentContact;
        }
    }

    return null;
}

function performAddCommand(requestParams) {
    // Если такой контакт существует, то команда пополняет список телефонов контакта. сделано

    var presentContact = getContactByName(requestParams.contactName);

    if (presentContact) {
        if (requestParams.contactNumbers != null) {
            for (var i = 0; i <= requestParams.contactNumbers.length; i++) {
                if (requestParams.contactNumbers[i] && !presentContact.contactNumbers.includes(requestParams.contactNumbers[i])) {
                    presentContact.contactNumbers.push(requestParams.contactNumbers[i]);
                }
            }
        }

    } else {
        var newContact = {
            contactName: requestParams.contactName,
            contactNumbers: requestParams.contactNumbers ? requestParams.contactNumbers : []
        };
        phoneBook.push(newContact);
    }
}

function performShowCommand() {
    var arrayToShow = [];

    var mapped = phoneBook.map(function (elem, i) {
        return {index: i, value: String(elem.contactName).toLowerCase()};
    });

    mapped.sort(function (contact1, contact2) {
        if (contact1.value > contact2.value) {
            return 1;
        }
        if (contact1.value < contact2.value) {
            return -1;
        }
        return 0;
    });

    var result = mapped.map(function (elem) {
        return phoneBook[elem.index];
    });

    // Контакт с пустым списком телефонов не должен возвращаться. сделано

    result.forEach(function (item, i, phoneBook) {
        if (item.contactNumbers.length > 0) {

            var numbers = "";
            phoneBook[i].contactNumbers.forEach(function(phoneBookItem) {
                numbers += (phoneBookItem + ", ")
            });
            numbers = numbers.substr(0,numbers.length - 2);
            arrayToShow.push(phoneBook[i].contactName + ": " + numbers);
            //console.log(arrayToShow);
            //console.log(item.contactNumbers);
        }
    });
    //console.log('TotalShow: ' + arrayToShow);
    return arrayToShow;
}

function performRemovePhoneCommand(requestParams) {
    //Удаляет телефон из телефонной книги. Если телефон успешно удалён, то функция должна вернуть true. Если такого телефона в телефонной книге не существует, то возвращается false.

    var remotePhoneNumber = requestParams.contactNumbers;
    var searchResult2;
    //console.log(remotePhoneNumber);

    for (var i = 0; i < phoneBook.length; i++) {
        var currentContact = phoneBook[i];
        var arrayCurrentNumbers = currentContact.contactNumbers;
        //console.log('Просматриваемый контакт: ' + currentContact.contactName);
        if (currentContact.contactNumbers != null) {
            searchResult2 = searchNumberForDeleted(currentContact);
            if (searchResult2 == true) return searchResult2;
        }

        function searchNumberForDeleted() {
            var searchResult = false;
            for (var i = 0; i < arrayCurrentNumbers.length; i++) {
                var currentNumber = arrayCurrentNumbers[i];

                if (currentNumber == remotePhoneNumber) {
                    var indexNumber = i;
                    arrayCurrentNumbers.splice(indexNumber, 1);
                    searchResult = true;
                    //console.log('Delete phone: ' + currentNumber);
                    break;

                } else {
                    currentNumber ++;
                }
            }
            return searchResult;
        }
    }
    //console.log("searchResult = |" + searchResult + "|");
    return searchResult2;
}


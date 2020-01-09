// Телефонная книга
var phoneBook = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
function parametrs(requestString) {

    const requestParams = parseRequestParams(requestString);

    switch (requestParams.command) {
        case ("ADD") : {
            performAddCommand(requestParams);
            break;
        }
        case ("SHOW") : {
            performShowCommand(requestParams);
            break;
        }
        case ("REMOVE_PHONE") : {
            performRemovePhoneCommand(requestParams);
            break;
        }
        // default :
    }
}

function parseRequestParams(requestString) {
    var arrayParametrs = requestString.split(' ');

    if (arrayParametrs[0] == 'REMOVE_PHONE') {
        return {
            command: arrayParametrs[0].toString(),
            contactNumbers: arrayParametrs[1] ? arrayParametrs[1].split(",") : null
        }

    } else {
        return {
            command: arrayParametrs[0].toString(),
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
        if (item.contactNumbers != null) {
            document.write(phoneBook[i].contactName + ":" + phoneBook[i].contactNumbers + "<br>");
        }
    });

}

function performRemovePhoneCommand(requestParams) {
    //Удаляет телефон из телефонной книги. Если телефон успешно удалён, то функция должна вернуть true. Если такого телефона в телефонной книге не существует, то возвращается false.
    var remotePhoneNumber = requestParams.contactNumbers;


    for (var i = 0; i < phoneBook.length; i++) {
        var currentContact = phoneBook[i];
        var arrayCurrentNumbers = currentContact.contactNumbers;

        if (currentContact.contactNumbers != null) {
            searchNumberForDeleted(currentContact);
        }


        function searchNumberForDeleted() {
            for (var i = 0; i < arrayCurrentNumbers.length; i++) {
                var currentNumber = arrayCurrentNumbers[i];

                if (currentNumber == remotePhoneNumber) {
                    var indexNumber = i;
                    arrayCurrentNumbers.splice(indexNumber, 1);

                } else {
                    currentNumber + i;
                }
            }
        }
    }
}

parametrs('ADD Bame 123,231');
parametrs('ADD aame 000,111');
parametrs('ADD aame 222,333');
parametrs('ADD nae');
parametrs('ADD nae 456,345');
parametrs('ADD nae 456,555');
parametrs('REMOVE_PHONE 111');
parametrs('SHOW');

// Телефонная книга
var phoneBook = [];




/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
function parametrs(requestString) {

    const requestParams = parseRequestParams(requestString);
    console.log(requestParams);

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

        if(arrayParametrs[0] == 'REMOVE_PHONE') {
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

    /*phoneBook.forEach(function (item, i, arr) {
        if(item.contactName === arrayParametrs[1]) {
           item.contactNumbers = [];
           item.contactNumbers.push(arrayParametrs[2]);
        }
        console.log('Массив' + item.contactName + item.contactNumbers);
    });*/
    var presentContact = getContactByName(requestParams.contactName);

    if (presentContact) {
      for(var i = 0; i < requestParams.contactNumbers.length; i++) {
          if (!presentContact.contactNumbers.includes(requestParams.contactNumbers[i])){
              presentContact.contactNumbers.push(requestParams.contactNumbers[i]);
          }
      }
    } else  {
        var newContact = {
            contactName: requestParams.contactName,
            contactNumbers: requestParams.contactNumbers
        };
        phoneBook.push(newContact);
    }

}

function performShowCommand(requestParams) {


    var mapped = phoneBook.map(function (elem, i) {
        console.log(elem.contactName);
        return {index: i, value: String(elem.contactName).toLowerCase()};
    });

    console.log(mapped);

    mapped.sort(function (contact1, contact2) {
        if(contact1.value > contact2.value) {
            return 1;
        }
        if(contact1.value < contact2.value) {
            return -1;
        }
        return 0;
    });

    var result = mapped.map(function (elem) {
        return phoneBook[elem.index];
    });

    console.log(result);
    // Контакт с пустым списком телефонов не должен возвращаться. сделано

    result.forEach(function (item, i, phoneBook) {
        if(item.contactNumbers != null) {
            document.write(phoneBook[i].contactName + ":" + phoneBook[i].contactNumbers + "<br>");
        }
    });

}

function performRemovePhoneCommand(requestParams) {
    //Удаляет телефон из телефонной книги. Если телефон успешно удалён, то функция должна вернуть true. Если такого телефона в телефонной книге не существует, то возвращается false.
    console.log(requestParams);
    var remotePhoneNumber = requestParams.contactNumbers;

    console.log("номер телефона который нужно удалить" + remotePhoneNumber);


    for (var i = 0; i < phoneBook.length; i++) {
        var currentContact = phoneBook[i];
        var arrayCurrentNumbers = currentContact.contactNumbers;
        console.log(currentContact);
        console.log(arrayCurrentNumbers);

        if(currentContact.contactNumbers != null) {
            searchNumberforDeleted(currentContact);
        }



        function searchNumberforDeleted(currentContact) {
            for (var i = 0; i < arrayCurrentNumbers.length; i++) {
                var currentNumber = arrayCurrentNumbers[i];


                console.log("текущий номер для сравнения: " + currentNumber);

                if (currentNumber == remotePhoneNumber) {
                    var indexNumber = i;
                    console.log(indexNumber);
                    arrayCurrentNumbers.splice(indexNumber, 1);

                    console.log("Массив телефонов после удаления: " + arrayCurrentNumbers);
                } else {
                    currentNumber+i;
                }
            }
        }



    }
}

parametrs('ADD Bame 123,231');
parametrs('ADD aame 000,111');
parametrs('ADD aame 222,333');
//parametrs('ADD nae');
parametrs('ADD nae 456,345');
parametrs('REMOVE_PHONE 111');
parametrs('SHOW');

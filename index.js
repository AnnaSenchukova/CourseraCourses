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
    return {
        command: arrayParametrs[0].toString(),
        contactName: arrayParametrs[1] ? arrayParametrs[1].toString() : "",
        contactNumbers: arrayParametrs[2] ? arrayParametrs[2].split(",") : null
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
    // Если такой контакт существует, то команда пополняет список телефонов контакта.

    /*phoneBook.forEach(function (item, i, arr) {
        if(item.contactName === arrayParametrs[1]) {
           item.contactNumbers = [];
           item.contactNumbers.push(arrayParametrs[2]);
        }
        console.log('Массив' + item.contactName + item.contactNumbers);
    });*/
    var presentContact = getContactByName(requestParams.contactName);

    if (presentContact) {
      for(var i = 0; i < requestParams.contactNumbers.length; i++){
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
    // Контакт с пустым списком телефонов не должен возвращаться.

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

    result.forEach(function (item, i, phoneBook) {
        document.write(phoneBook[i].contactName + ":" + phoneBook[i].contactNumbers + "<br>");
    });

}

function performRemovePhoneCommand(requestParams) {

}

parametrs('ADD Bame 123,231');
parametrs('ADD aame 222,556');
parametrs('ADD aame 222,555');
parametrs('ADD nae');
parametrs('SHOW');

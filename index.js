// Телефонная книга
var phoneBook = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
function parseRequestParams(command) {
    var arrayParametrs = command.split(' ');
    return {
        commandName: arrayParametrs[0].toString(),
        contactName: arrayParametrs[1].toString(),
        contactNumbers: arrayParametrs[2].split(",")
    }
}

function parametrs(command) {
    const requestParams = parseRequestParams(command);

        console.log(requestParams);


    if (commandName === 'ADD') {
        // Если такой контакт существует, то команда пополняет список телефонов контакта.

        /*phoneBook.forEach(function (item, i, arr) {
            if(item.contactName === arrayParametrs[1]) {
               item.contactNumbers = [];
               item.contactNumbers.push(arrayParametrs[2]);
            }
            console.log('Массив' + item.contactName + item.contactNumbers);
        });*/



        const newContact = {
            contactName: arrayParametrs[1],
            toString: function() {
                console.log('' + this.contactName);
                return '' + this.contactName;
            },
            contactNumbers: arrayParametrs[2],

        };

        newContact.toString();
        phoneBook.push(newContact);
        console.log(newContact);
    }
    console.log(phoneBook);

    if (commandName === 'SHOW') {
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

        /*
               for (i = 0; i < phoneBook.length; i++) {
                   function sortName(contact1, contact2) {

                       if(contact1.contactName > contact2.contactName) {
                           return 1;
                       }
                       if(contact1.contactName < contact2.contactName) {
                           return -1;
                       }
                       return 0;
                   }
                   var result = phoneBook.sort(sortName);
                   console.log(result);
                   //document.write(phoneBook[i].contactName + ":" + phoneBook[i].contactNumbers + "<br>");
               }
           }

           /*  var mappedBook = phoneBook.map(function (phoneBook[i].contactName, i)
                   {
                       return {
                           index: i,
                           value: phoneBook[i].contactName.toLowerCase()
                       }
                   });
                   mappedBook.sort(function (a, b) {
                       if (a.contactName > b.contactName) {
                           return 1;
                       }
                       if (a.contactName < b.contactName) {
                           return -1;
                       }
                       return 0;
                   });

                   var showContent = mappedBook.map(function (phoneBook[i].contactName)
                   {
                       return phoneBook[phoneBook[i].contactName.index];
                   });*/

        //phoneBook.filter(function(contact) {
        //    console.log(contact !== "");
        //    return contact !== "";
        //});

        //let showContacts = phoneBook.map(contact => contact.contactName + contact.contactNumbers);
        //document.write(showContacts);




        return commandName;
}

parametrs('ADD Bame 123,231');
parametrs('ADD aame 234,556');
parametrs('ADD aame 222,555');
parametrs('ADD nae');
parametrs('SHOW');

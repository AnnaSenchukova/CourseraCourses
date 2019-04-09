// Телефонная книга
var phoneBook = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
function parametrs(command) {
    var arrayParametrs = command.split(' ');

    for (var i = 0; i < arrayParametrs.length; i++) {
        var commandName = arrayParametrs[0];
        commandName.toString();

        console.log(commandName);
    }

    if (commandName === 'ADD') {
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
parametrs('ADD');
parametrs('SHOW');

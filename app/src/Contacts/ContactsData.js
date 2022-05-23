import Avital from './Avital.jpg'
import Maayan from './Maayan.jpg'
import Yarin from './Yarin.jpg'
import Shoval from './shoval.jpg'
import Asaf from './Asaf.jpg'
import Itamar from './itamar.jpg'

let currentTime = '04:04'


const ContactsData = [{
    name: "Avital", password: "123456", numOfMessages: "2", pic: Avital, name: "Avital", messages: [{
        type: 'Text', context: {
            message: 'Hi!',
            id: '',
            fromMe: false, time: currentTime
        }
    }, {
        type: 'Text', context: {
            message: 'I missed you',
            id: '',
            fromMe: false, time: currentTime
        }
    }]
    , myContactList: ["Yarin", "Maayan", "Itamar", "Shoval"]
},
{
    name: "Maayan", password: "123456", numOfMessages: "2", pic: Maayan, name: "Maayan", messages: [{
        type: 'Text', context: {
            message: 'Hello Buba',
            id: '',
            fromMe: false, time: currentTime
        }
    }, {
        type: 'Text', context: {
            message: 'How you Doin?',
            id: '',
            fromMe: false, time: currentTime
        }
    }]
    , myContactList: ["Yarin", "Avital", "Itamar", "Asaf"]
},
{
    name: "Yarin", password: "123456", numOfMessages: "2", pic: Yarin, name: "Yaarin", messages: [{
        type: 'Text', context: {
            message: 'Heyyyy',
            id: '',
            fromMe: false, time: currentTime
        }
    }, {
        type: 'Text', context: {
            message: 'Iv been tryin to call youuu',
            id: '',
            fromMe: false, time: currentTime
        }
    }]
    , myContactList: ["Maayan", "Avital", "Asaf", "Shoval"]
},
{ name: "Shoval", password: "123456", numOfMessages: "0", pic: Shoval, name: "Shoval", messages: [], myContactList: ["Maayan", "Avital"] },
{ name: "Asaf", password: "123456", numOfMessages: "0", pic: Asaf, name: "Asaf", messages: [], myContactList: ["Maayan", "Avital"] },
{ name: "Itamar", password: "123456", numOfMessages: "0", pic: Itamar, name: "Itamar", messages: [], myContactList: ["Maayan", "Avital"] }
];

export default ContactsData
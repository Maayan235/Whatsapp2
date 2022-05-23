import Avital from'./Avital.jpg'
import Maayan from'./Maayan.jpg'
import Yarin from'./Yarin.jpg'

let currentTime = '04:04'


const ContactsData = [{name: "Avital", password:"1234567A", numOfMessages: "2", pic: Avital,name:"Avital", messages: [{message: 'Hi!',
id: '',
fromMe: false, time: currentTime } ,{message: 'I missed you',
id: '',
fromMe: false, time: currentTime}]},
    {
        name: "Maayan", password: "1234567A", numOfMessages: "2", pic: Maayan,name:"Maayan", messages: [{
            message: 'Hello Buba',
            id: '',
            fromMe: false, time: currentTime
        }, {
            message: 'How you Doin?',
            id: '',
            fromMe: false, time: currentTime
        }]
    },
    {
        name: "Yarin", password: "1234567A", numOfMessages: "2", pic: Yarin,name:"Yaarin", messages: [{
            message: 'Heyyyy',
            id: '',
            fromMe: false, time: currentTime
        }, {
            message: 'Iv been tryin to call youuu',
            id: '',
            fromMe: false, time: currentTime
        }]
    }];

export default ContactsData
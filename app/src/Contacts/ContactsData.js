import Avital from'./Avital.jpg'
import Maayan from'./Maayan.jpg'
import Yarin from'./Yarin.jpg'
import Shoval from './shoval.jpg'
import Asaf from './Asaf.jpg'
import Itamar from './itamar.jpg'

let currentTime = '04:04:04'


const ContactsData = [{
    name: "Avital", password: "123456", numOfMessages: "2", pic: Avital, messages: [{
        message: 'Hi!',
        username: '',
        fromMe: false, time: currentTime
    }, {
        message: 'I missed you',
        username: '',
        fromMe: false, time: currentTime
    }]
},
{
    name: "Maayan", password: "123456", numOfMessages: "2", pic: Maayan, messages: [{
        message: 'Hello Buba',
        username: '',
        fromMe: false, time: currentTime
    }, {
        message: 'How you Doin?',
        username: '',
        fromMe: false, time: currentTime
    }]
},
{
    name: "Yarin", password: "123456", numOfMessages: "2", pic: Yarin, messages: [{
        message: 'Heyyyy',
        username: '',
        fromMe: false, time: currentTime
    }, {
        message: 'Iv been tryin to call youuu',
        username: '',
        fromMe: false, time: currentTime
    },
    {name: "shoval", password: "123456", numOfMessages: "0", pic: Shoval, messages: []},
    {name: "Asaf", password: "123456", numOfMessages: "0", pic: Asaf, messages: []},
    {name: "Itamar", password: "123456", numOfMessages: "0", pic: Itamar, messages: []}]
}];

export default ContactsData
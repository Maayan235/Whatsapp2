import Avital from'./Avital.jpg'
import Maayan from'./Maayan.jpg'
import Yarin from'./Yarin.jpg'
import Shoval from './shoval.jpg'
import Asaf from './Asaf.jpg'
import Itamar from './itamar.jpg'

let currentTime = '04:04:04'


const ContactsData = [{
    name: "Avital", password: "123456", numOfMessages: "2", pic: img1, messages: [{type: 'Text', context:{
        message: 'Hi!',
        username: '',
        fromMe: false, time: currentTime
    }},{type: 'Text', context: {
        message: 'I missed you',
        username: '',
        fromMe: false, time: currentTime
    }}]
},
{
    name: "Maayan", password: "123456", numOfMessages: "2", pic: img2, messages: [ {type: 'Text', context: {
        message: 'Hello Buba',
        username: '',
        fromMe: false, time: currentTime
    }}, {type: 'Text', context: {
        message: 'How you Doin?',
        username: '',
        fromMe: false, time: currentTime
    }}]
},
{
    name: "Yarin", password: "123456", numOfMessages: "2", pic: img3, messages: [{type: 'Text', context:{
        message: 'Heyyyy',
        username: '',
        fromMe: false, time: currentTime
    }}, {type: 'Text', context:{
        message: 'Iv been tryin to call youuu',
        username: '',
        fromMe: false, time: currentTime
    }}]
}];

export default ContactsData
import img1 from'./img1.jpg'
import img2 from'./img2.jpg'
import img3 from'./img3.jpg'

let currentTime = '04:04:04'


const ContactsData = [{name: "Avital", password:"123456", numOfMessages: "2", pic: img1, messages: [{message: 'Hi!',
username: '',
fromMe: false, time: currentTime } ,{message: 'I missed you',
username: '',
fromMe: false, time: currentTime}]},
                        {name: "Maayan", password:"123456", numOfMessages: "2", pic: img2,  messages: [{message: 'Hello Buba',
                        username: '',
                        fromMe: false, time: currentTime } ,{message: 'How you Doin?',
                        username: '',
                        fromMe: false, time: currentTime}]},
                        {name: "Yarin", password:"123456", numOfMessages: "2", pic: img3,  messages: [{message: 'Heyyyy',
                        username: '',
                        fromMe: false, time: currentTime } ,{message: 'Iv been tryin to call youuu',
                        username: '',
                        fromMe: false, time: currentTime}]}];

export default ContactsData
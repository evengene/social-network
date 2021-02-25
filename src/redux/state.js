/**
 State component

 contains data and functions to control state
 passes state through props to other components

 */

import rerenderEntireDom from "../render";

let state = {
    profilePage: {
        postData: [
            {
                m: 'Fall\'s best meteor shower to peak on Tuesday night\n',
                like: '3',
                dislike: '0',
                date: '01.01.2022'
            }, {
                m: 'Scientists clock the fastest interval of time in \'zeptoseconds\'',
                like: '5',
                dislike: '2',
                date: '01.08.2022'
            },
            {
                m: 'Alexey is my superhero',
                like: '30',
                dislike: '0',
                date: '18.01.2021'
            },
        ]
    },
    messagesPage: {
        dialogsData: [
            {
                id: '1',
                name: 'Anya'
            },
            {
                id: '2',
                name: 'Andrew'
            },
            {
                id: '3',
                name: 'Maria'
            },
            {
                id: '4',
                name: 'Kirill'
            },
            {
                id: '5',
                name: 'Alexey'
            },
            {
                id: '6',
                name: 'Alexey'
            },
            {
                id: '7',
                name: 'Alexey'
            },
            {
                id: '8',
                name: 'Alexey'
            },
            {
                id: '9',
                name: 'Alexey'
            },
            {
                id: '10',
                name: 'Alexey'
            }
        ],
        messagesData: [
            {
                id: '1',
                name: 'Hey, how are you?',
                float: 'right',
            },
            {
                id: '2',
                name: 'Hey, I\'m great, and you?'
            },
            {
                id: '3',
                name: 'Wonderful',
                float: 'right',
            },
            {
                id: '4',
                name: 'How is the weather in Colorado?'
            },
            {
                id: '5',
                name: 'It\'s snowing today',
                float: 'right',
            }
        ],
    },
}

export default state

export let addPost = (postMessage) => {

    const sampleObject = {
        m: postMessage,
        like: '0',
        dislike: '0',
        date: '18.12.12'
    }
    //add this object to our posts:
    state.profilePage.postData.push(sampleObject)
    rerenderEntireDom(state);
}


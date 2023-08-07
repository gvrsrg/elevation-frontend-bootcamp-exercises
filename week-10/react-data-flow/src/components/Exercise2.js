import { useState } from 'react'
import Conversation from './Conversation'
import List from './List'


function Exercise2() {
    const conversationData = 
    {
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    }

    const [convers, setConvers] = useState (conversationData)

    const displayConvo = function(withWhom) {
        const newConvers = {...convers};
        newConvers.displayConversation = withWhom;
        setConvers(newConvers);
    }
    
    const findConversByName = function(withName) {
        return convers.conversations.find(item => item.with === withName);
    }

    const getContacts = function (){
        let contacts = []
        for (let conv of convers.conversations) {
            contacts.push(conv.with)
        }
        return contacts
    }

    return ( 
        <div> {convers.displayConversation === null ?
            <List contacts={getContacts()} displayConvo={displayConvo}/>:
            <Conversation conversation={findConversByName(convers.displayConversation)} displayConvo={displayConvo}/>
            }
        </div>
    )
}

export default Exercise2
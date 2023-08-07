import classnames from 'classnames'

function Conversation({conversation, displayConvo}) {
    return (<div class="conversation">
        <div class="conversation-header">{conversation.with}</div>
        {conversation.convo.map((c) => {
            let senderClass = c.sender+"-message"
            let author = (c.sender=="self" ? "Me" : conversation.with)
            return (<div className={classnames(senderClass)}><span classname = "author">{author}:</span> {c.text} </div>)
        }
        )}
        <button className="back" onClick={()=>displayConvo(null)}>Back</button>
            </div> )
}

export default Conversation


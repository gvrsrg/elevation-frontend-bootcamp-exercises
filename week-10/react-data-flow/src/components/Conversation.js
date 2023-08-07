import classnames from 'classnames'

function Conversation({conversation}) {
    return (<div class="conversation">
        <div class="conversation-header">{conversation.with}</div>
        {conversation.convo.map((c) => {
            let senderClass = c.sender+"-message"
            return (<div className={classnames(senderClass)}> {c.text} </div>)
        }
        )}

            </div> )
}

export default Conversation


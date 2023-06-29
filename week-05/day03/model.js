const Posts = function() {
    const posts = [
        {
            name: "Uncle Jerome",
            text: "Happy birthday kido!"
        },
        {
            name: "BFF Charlene",
            text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
        },
        {
            name: "Old High School Teacher",
            text: "Hey ace, have a good one."
        }
    ]

    const addMessage = function(_name, _text){
        newMessage = {
            name: _name,
            text: _text
        }
        posts.push(newMessage)
    }

    function getMessages() {
        return [...posts]
    }


    return {
        addMessage,
        getMessages
    }

}
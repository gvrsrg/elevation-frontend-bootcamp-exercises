import Contact from "./Contact"

function List({contacts, displayConvo }) {
    return (<div class="list">
            {contacts.map((c) => {return (<Contact contact={c} displayConvo={displayConvo}/>)})}
            </div> )
}

export default List
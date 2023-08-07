import Contact from "./Contact"

function List({contacts}) {
    return (<div class="list">
            {contacts.map((c) => {return (<Contact contact={c}/>)})}
            </div> )
}

export default List
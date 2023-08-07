function Contact({contact, displayConvo}) {
    return (<div class="contact">
            <p onClick={()=>displayConvo(contact)}>{contact}</p>
            </div> )
}

export default Contact
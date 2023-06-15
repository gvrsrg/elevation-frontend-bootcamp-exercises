const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}



const checkReservations = function () {
    const guestName = document.getElementById("guestName")
    const message = document.getElementById("message")
    const inputForm = document.getElementById("inputForm")

    if (guestName.value in reservations) {
        if (reservations[guestName.value].claimed) {
            message.innerHTML = "Sorry, somebody already claimed this reservation"
        } else {
            inputForm.style.display = "none"
            message.innerHTML = "Welcome, " + guestName.value
        }
    } else {
        message.innerHTML = "Sorry, there is no reservation for your name."
    }
}
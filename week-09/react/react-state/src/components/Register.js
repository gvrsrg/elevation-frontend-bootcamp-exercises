function Register({reservations}) {
    return (<div id="register">
        <h4>You cannot reserve during these times:</h4>
        {reservations.map(reserv => {
            return <div key={reserv.name}>{reserv.day} at {reserv.time}</div>
            }
            )
            }
    </div>)
  }
export default Register  
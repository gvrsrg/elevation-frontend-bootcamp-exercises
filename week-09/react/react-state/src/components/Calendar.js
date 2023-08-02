function Calendar({reservations}) {
    return (
      <div id="calendar">
        <h4>Calendar</h4>
        {reservations.map(reserv => {
            return <p>{reserv.name} has a reservations on {reserv.day} at {reserv.time}</p>
            }
            )
            }
      </div>
    )
  }
  
export default Calendar;
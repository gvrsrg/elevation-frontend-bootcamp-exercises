import logo from './logo.svg';
import './App.css';
import SpotCheck1 from './components/SpotCheck1';
import Likes from './components/Likes';
import Companies from './components/Companies';
import Calendar from './components/Calendar';
import Register from './components/Register';
import { useState } from 'react';
import Hot from './components/Hot';
import Cold from './components/Cold';
import Houdini from './components/Hudini';


function App() {
  const logClick = () => {
    console.log("I was clicked!")
  }
  let companiesData = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]

  const [reservations, setReservations] = useState([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" }
]);

  const [temperature, setTemperature] = useState(true)
  const toggleTemperature = () =>{
    setTemperature(!temperature)
  }

  return (
    <div>

      <button onClick={logClick}>Click me</button>
      <SpotCheck1  />
      <Likes  />
      <Companies companiesData={companiesData}/>
      <Calendar reservations={reservations} />
      <Register reservations={reservations} />

      {temperature ? <Hot/> : <Cold/>}
          <button onClick={toggleTemperature}>Change Temp!</button>
     <Houdini />
    </div>


  );
}

export default App;

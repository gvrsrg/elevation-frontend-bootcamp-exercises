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
import Landing from './components/Landing';
import Home from './components/Home';


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

  const [userData, setUserData] = useState(  
    {
      user: "Robyn",
      store: [
        { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
        { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
        { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
      ],
      shouldDiscount: true,
      currentPage: "Home"
    }) 

    const togglePage = function() {
      let newUserData = {...userData}
      newUserData.store = [...userData.store]
      newUserData.currentPage = (userData.currentPage === "Landing" ? "Home" : "Landing") 
      setUserData(newUserData)
    }
  
    const toggleDiscount = function() {
      let newUserData = {...userData}
      newUserData.store = [...userData.store]
      newUserData.shouldDiscount = !userData.shouldDiscount; 
      setUserData(newUserData)
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

     {userData.currentPage === "Landing" ? <Landing data={userData}/> : <Home store={userData.store} shouldDiscount={userData.shouldDiscount}/> }
      <button onClick={togglePage}>Now shown {userData.currentPage} (press to toggle)</button>
      <button disabled={userData.currentPage === "Landing"} onClick={toggleDiscount}>
          {userData.shouldDiscount ? "Discounted" : "Full"} prices (press to toggle)
        </button>

    </div>


  );
}

export default App;

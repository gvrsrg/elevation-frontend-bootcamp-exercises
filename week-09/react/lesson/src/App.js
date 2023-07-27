import logo from './logo.svg';
import './App.css';

function App() {

//exercise 1 React Intro
  // let companies = [ 
  //   { name: "Tesla", revenue: 140 },
  //   { name: "Microsoft", revenue: 300 },
  //   { name: "Google", revenue: 600 }
  // ]
  
  // const showCompany = (name, revenue) => <div id={name}>{name} makes {revenue} every year</div>

  // return (
  //   companies.map((c) => showCompany(c.name, c.revenue))
  // )
//exercise 2 React Intro 
  const getClassName = (temperature) => {
    if (temperature < 15) return "freezing";
    if (temperature > 30) return "hell-scape";
    return "fair";
  }

  const temperature = Math.floor(Math.random()*100);

 return (
       <div id="weatherBox" className={getClassName(temperature)}>{temperature} deg</div>
 )

}

export default App;

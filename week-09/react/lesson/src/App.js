import logo from './logo.svg';
import './App.css';

function Nav() {
  return (
      <div id="nav"><span>Home</span><span>About</span></div>
  )
}

function AboutUs() {
  return <p>This is an example of an about us page~</p>
}

export function Sum() {
  const num1 = 9
  const num2 = 3
  return (
      <div>
          The sum is {num1 + num2}
      </div>
  )
}

function LandingPage() {
  return (
    <div>Welcome!</div>
  )
}

function About () {
  return (<div><p>We are great!</p>
    <SignUp />
    <Blurb />
    </div>

  )
}


function SignUp (){
  return <p>Sign up here...</p>
}

function Blurb (){
  return <p>Blurb...</p>
}

function App() {
  
  let isUserLoggedIn = localStorage.getItem('loggedIn')
  let componentToDisplay = isUserLoggedIn ?
      <LandingPage /> :
      <AboutUs />

  return (
      <div className="app">
          <Nav />
          <About />
          <LandingPage />
      </div>
  )
  
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
//   const getClassName = (temperature) => {
//     if (temperature < 15) return "freezing";
//     if (temperature > 30) return "hell-scape";
//     return "fair";
//   }

//   const temperature = Math.floor(Math.random()*100);

//  return (
//        <div id="weatherBox" className={getClassName(temperature)}>{temperature} deg</div>
//  )
}




export default App;

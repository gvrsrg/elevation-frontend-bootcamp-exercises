import logo from './logo.svg';
import './App.css';

function App() {


  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]
  
  const showCompany = (name, revenue) => <div id={name}>{name} makes {revenue} every year</div>

  return (
    companies.map((c) => showCompany(c.name, c.revenue))
  )
}

export default App;

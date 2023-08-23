import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Exercise1 from './Components/Exercise1';

function App() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [titles, setTitles] = useState([])

  const getColors = function() {
    return Promise.resolve()
      .then(() => ["green", "blue", "pink", "purple", "gold", "white"])
  }

  const updateTitle = () => {
    setTitleIndex((titleIndex + 1)%6);
  }

  useEffect(()=>{
    getColors().then((colors)=>{
      setTitles(colors)
    })
  }, [])

  useEffect(() => {
    setTimeout(updateTitle, 1000)
  }, [titleIndex])

  return (
    <div>
      <div className="box">{titles[titleIndex]}</div>
      <div className="box"><Exercise1/></div>
    </div>
  );
}


export default App;

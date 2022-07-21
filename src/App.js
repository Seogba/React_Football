import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from "react";


function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dc8ae74dd7msh32aeb2cb02e8137p100e4djsn3f626db9ac6a',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const[loading,setLoading] = useState(true);
  const[soccer,setSoccer] = useState([]);
  const getSoccer = async() =>{
    const json = await(
      await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/timezone`
      )
    ).json();
    setSoccer(json.data.soccer);
    setLoading(false);
  };

  useEffect(() =>{
    getSoccer();
  }, []);

  return (
    <div>
      {loading? <h1>loading,,,</h1> : <div>Hi</div>}
    </div>
  )

}

export default App;



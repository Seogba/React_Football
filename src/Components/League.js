import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const League = () => {
  const [leagues, setLeagues] = useState([]);
  const [now] = useState(24);
  const [limits, setLimits] = useState(24);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://v3.football.api-sports.io/leagues", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => {
        console.log("res,data:", res.data.response);
        setLeagues(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClick = () => {
    setLimits(limits + now);
  };

  return (
    <div className="league">
      {loading ? (
        <h1>Now loading,,,</h1>
      ) : (
        leagues.map((data) => (
          <div key={data.id} className="league-tab">
            {data.length > limits
              ? (data.length = limits - 1)
              : (data.length = leagues.length - 1)}
            <img src={data.league.logo} alt="#" className="league-logo" />
            <h3>{data.league.name}</h3>
          </div>
        ))
      )}
      {loading ? null : (
        <button onClick={onClick} id="more-button">
          read more...
        </button>
      )}
    </div>
  );
};

export default League;

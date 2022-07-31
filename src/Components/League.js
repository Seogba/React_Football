import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const League = () => {
  const [leagues, setLeagues] = useState([]);
  const [now, setNow] = useState(24);
  const [limits, setLimits] = useState(24);

  const loadMoreLeague = () => {};

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="league">
      {leagues.map((data) => (
        <div key={data.id} className="league-tab">
          <img src={data.league.logo} alt="#" className="league-logo" />
          <br />
          <h3>{data.league.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default League;

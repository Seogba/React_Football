import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const League = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    axios("https://v3.football.api-sports.io/leagues", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => {
        console.log(res);
        setLeagues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="league"></div>;
};

export default League;

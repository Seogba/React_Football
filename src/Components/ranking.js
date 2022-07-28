import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    axios("https://v3.football.api-sports.io/standings", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => {
        console.log(res);
        setRankings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="ranking"></div>;
};

export default Ranking;

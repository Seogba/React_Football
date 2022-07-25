import { useState, useEffect } from "react";
import "../App.css";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc8ae74dd7msh32aeb2cb02e8137p100e4djsn3f626db9ac6a",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const getRanking = async () => {
    const response = await (
      await fetch(`https://api-football-v1.p.rapidapi.com/v3/timezone`)
    ).json();
    const json = await response.json();
    setRankings(json.data.rankings);
  };

  useEffect(() => {
    getRanking();
  });
  return (
    <div className="Ranking">
      <h1>Ranking </h1>
    </div>
  );
};

export default Ranking;

import { useEffect, useState } from "react";
import "../App.css";

const League = () => {
  const [leagues, setLeagues] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc8ae74dd7msh32aeb2cb02e8137p100e4djsn3f626db9ac6a",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const getLeagues = async () => {
    const response = await (
      await fetch(`https://api-football-v1.p.rapidapi.com/v3/timezone`)
    ).json();
    const json = await response.json();
    setLeagues(json.data.leagues);
    console.log(json);
  };

  useEffect(() => {
    getLeagues();
  });
  return (
    <div className="League">
      <h1>League </h1>
    </div>
  );
};

export default League;

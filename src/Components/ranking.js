import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);
  const [selectYear, setSelectYear] = useState("2021");
  const [selectLeague, setSelectLeague] = useState("Euro Championship");

  /*useEffect(() => {
    axios("https://v3.football.api-sports.io/standings?league", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => {
        console.log("res,data:", res);
        // setRankings(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  return (
    <div className="ranking-tab">
      <div className="select-tab">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectLeague}
          onChange={(e) => setSelectLeague(e.target.value)}
        >
          <option value="Euro">Euro Championship</option>
          <option value="Confe">Confederations Cup</option>
        </select>
      </div>
    </div>
  );
};
export default Ranking;

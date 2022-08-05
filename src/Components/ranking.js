import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);
  const [selectYear, setSelectYear] = useState("2021");
  const [selectLeague, setSelectLeague] = useState("61");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(
      `https://v3.football.api-sports.io/standings?league=${selectLeague}&season=${selectYear}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": apikey,
        },
      }
    )
      .then((res) => {
        console.log("res,data:", res.data.response);
        setRankings(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectLeague, selectYear]);

  /*<div className="ranking-show">
  {loading ? (
    <h1>now loading,,,</h1>
  ) : (
    rankings.map((data) => (
     
    ))
  )}
</div>*/

  return (
    <div className="ranking">
      <div className="select-tab">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectLeague}
          onChange={(e) => setSelectLeague(e.target.value)}
        >
          <option value="france">Ligue 1</option>
          <option value="Euro">Euro Championship</option>
          <option value="Confe">Confederations Cup</option>
        </select>
        <select
          name="select-year"
          id="select-year"
          defaultValue={selectYear}
          onChange={(e) => setSelectYear(e.target.value)}
        >
          <option value="2021">2021</option>
          <option value="2021">2020</option>
          <option value="2021">2019</option>
        </select>
      </div>
      {rankings.map((data) => (
        <div key={data.id} className="ranking-tab">
          {data.length}
        </div>
      ))}
    </div>
  );
};
export default Ranking;

import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);
  const [years, setYears] = useState([]);
  const [selectYear, setSelectYear] = useState("2021");
  const [selectLeague, setSelectLeague] = useState("61");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://v3.football.api-sports.io/leagues/seasons", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => {
        console.log("res,data:", res.data.response);
        setYears(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return (
    <div className="ranking">
      {rankings.map((data) => (
        <div key={data.id} className="ranking-tab">
          <select>
            <option>
              {data.league.id} : {data.league.name}
            </option>
          </select>
          <select
            className="season-select"
            onChange={(e) => setSelectYear(e.target.value)}
          >
            {years.map((season) => (
              <option>{season}</option>
            ))}
          </select>
          {data.league.standings[0].map((rankData) => (
            <div key={rankData.id} className="rank-show">
              <dl>
                <dt>
                  <h3>
                    <img src={rankData.team.logo} alt="#"></img>
                    {rankData.rank}.{rankData.team.name}
                  </h3>
                </dt>
              </dl>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Ranking;

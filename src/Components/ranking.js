import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const Ranking = () => {
  const [rankings, setRankings] = useState([]);
  const [selectYear, setSelectYear] = useState("2021");
  const [selectLeague, setSelectLeague] = useState("61");
  const [leagueData, setLeagueData] = useState([]);
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

  useEffect(() => {
    axios("https://v3.football.api-sports.io/leagues", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apikey,
      },
    })
      .then((res) => {
        console.log("data : ", res.data.response);
        setLeagueData(res.data.response);
        console.log("gd: ", leagueData[0].seasons.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ranking">
      {rankings.map((data) => (
        <div key={data.id} className="ranking_tab">
          <select
            className="league_select"
            onChange={(option) => setSelectLeague(option.target.value)}
          >
            {leagueData.map((selectData) => (
              <option value={selectData.league.id}>
                {selectData.league.id} : {selectData.league.name}
              </option>
            ))}
          </select>
          <select
            className="season-select"
            onChange={(e) => setSelectYear(e.target.value)}
          ></select>
          {data.league.standings[0].map((rankData) => (
            <div key={rankData.id} className="rank_show">
              <dl>
                <dt>
                  <h3>
                    <img src={rankData.team.logo} alt="#" />
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

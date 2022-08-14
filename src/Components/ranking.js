import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import apikey from "../Data/config";

const Ranking = () => {
  const [leagueData, setLeagueData] = useState(null);
  const [rankings, setRankings] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedLeagueId, setSelectedLeagueId] = useState("61");
  const [loading, setLoading] = useState(true);

  //랭킹데이터
  useEffect(() => {
    axios(
      `https://v3.football.api-sports.io/standings?league=${selectedLeagueId}&season=${selectedYear}`,
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
  }, [selectedLeagueId, selectedYear]);

  //리그데이터 받아옴
  //1. 전체 리그의 데이터를 가져왔다
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (leagueData != null) {
      const targetLeagueData = leagueData.find((item) => {
        console.log(item.league.id);
        console.log(selectedLeagueId);
        return item.league.id === selectedLeagueId;
      });
      // const yearArray = targetLeagueData.seasons.map((season) => season.year);
      // setYears(yearArray);
    }
  }, [selectedLeagueId, leagueData]);

  // useEffect(() => {
  //   axios("https://v3.football.api-sports.io/leagues/seasons", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "v3.football.api-sports.io",
  //       "x-rapidapi-key": apikey,
  //     },
  //   })
  //     .then((res) => {
  //       console.log("res,data:", res.data.response);
  //       setYears(res.data.response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="ranking">
      {rankings.map((data) => (
        <div key={data.id} className="ranking_tab">
          <select
            className="league_select"
            defaultValue={selectedLeagueId}
            onChange={(option) => setSelectedLeagueId(option.target.value)}
          >
            {leagueData &&
              leagueData.map((selectData) => (
                <option value={selectData.league.id}>
                  {selectData.league.id} : {selectData.league.name}
                </option>
              ))}
          </select>
          <select
            className="season-select"
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((season) => (
              <option>{season}</option>
            ))}
          </select>
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

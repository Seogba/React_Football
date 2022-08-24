import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/League.css";
import axios from "axios";
import apikey from "../Data/config";
import TopNav from "./TopNav";

const League = () => {
  const [leagues, setLeagues] = useState([]);
  const [limits, setLimits] = useState(24);
  const [loading, setLoading] = useState(true);
  const [passLeagueId, setPassLeagueId] = useState(null);
  const INCREASE_NUMBER = 24;

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
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //limits가 변경될 때 변경된 길이만큼 leagues의 길이를 재할당
  // seEffect(()=>{
  //   const length = Math.min(leagues.length , limits);
  //   const newArray = [];

  //   for(let i = 0; i < length; i++)
  //   {
  //     newArray.push(leagues[i])
  //   }

  //   setLeagues(newArray);
  // }, [limits]);

  const onClick = () => {
    setLimits(limits + INCREASE_NUMBER);
  };

  return (
    <>
      <div className="league">
        {loading ? (
          <h1>Now loading,,,</h1>
        ) : (
          leagues.map(
            (item, index) =>
              index < limits && (
                // 비효율적으로 반복문이 돌고있음
                <div key={item.league.id} className="league-tab">
                  <img src={item.league.logo} alt="#" className="league-logo" />

                  <h3>{item.league.name}</h3>
                </div>
              )
          )
        )}
      </div>
      <div className="additional-elements">
        {loading ? null : (
          <button onClick={onClick} id="more-button">
            read more...
          </button>
        )}
        {loading ? null : (
          <a href="#top">
            <img className="nav-Img" src="img/up.png" alt="#" />
          </a>
        )}
      </div>
    </>
  );
};

export default League;

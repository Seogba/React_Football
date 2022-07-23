import '../App.css';
import {useState} from "react";
import League from "./League"
import Ranking from "./ranking"

const Content = () =>{

    
    return (
        <div className="Content">
            <div className="menu">
                <div className='menu-league'>
                    <h3>리그</h3>
                </div>
                <div className="menu-ranking">
                    <h3>순위</h3>
                </div>
            </div>
        </div>
    )
}

export default Content;
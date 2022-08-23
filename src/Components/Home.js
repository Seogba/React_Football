import "../App.css";

const Home = () => {
  return (
    <div className="main-home">
      <div className="forward">
        <img src="img/leftwing.png" alt="#" />
        <img src="img/top.png" alt="#" />
        <img src="img/rightwing.png" alt="#" />
      </div>

      <div className="midfielder">
        <img src="img/leftmid.png" alt="#" />
        <img src="img/centermid.png" alt="#" />
        <img src="img/rightmid.png" alt="#" />
      </div>

      <div className="defender">
        <img src="img/leftback.png" alt="#" />
        <img src="img/leftcenterback.png" alt="#" />
        <img src="img/rightcenterback.png" alt="#" />
        <img src="img/rightback.png" alt="#" />
      </div>
      <div className="goalkeeper">
        <img src="img/goalkeeper.png" alt="#" />
      </div>
    </div>
  );
};

export default Home;

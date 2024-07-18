import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
        <h1 className="title">         
            Unlock the Door to Your Dream Home</h1>
          <p style={{textAlign: "justify", fontSize: "17px", transition: "all 0.3s ease-in-out"}}>
          Find your dream home with ease. Our app offers seamless property browsing, expert guidance, and personalized services. Stay updated with the latest listings and connect with trusted agents. At Greenfield Realty, we turn houses into lasting memories.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
import React from "react";
import "./App.css";
import Images from "./Images";

function App(props) {
  // console.log(props);
  return (
    <>
    <div className="cards">
      <div className="card">
       <Images imgsrc={props.imgsrc} />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a
            href={props.link}
            target="_blank"
          >
            <button>Watch Now</button>
          </a>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;

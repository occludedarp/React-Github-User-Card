import React, { fragment } from "react";

function FollowerCard(props) {
  return(
    <>
      <div style={{width: "400px", margin: "2% auto", boxShadow: "0px 10px 20px 5px", borderRadius: "15px", overflow: "hidden" }}>
        <img src={props.image} style={{height: "400px", width: "400px"}}/>
        <div>
          <h3>{props.login}</h3>
          <p></p>
        </div>
      </div>
    </>
  )

}

export default FollowerCard;
import React, { fragment } from "react";

const User = (props) => {
  return(

      <div style={{width: "100%", margin: "0 auto", boxShadow: "0px 0px 20px 5px", borderRadius: "15px", overflow: "hidden" }}>
        <div>
          <img src={props.image} style={{height: "400px", width: "400px"}}/>
          <h3>{props.login}'s followers</h3>
        </div>
      </div>

  )
}

export default User;
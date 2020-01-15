import React, { fragment } from "react";

function UserCard(props) {
  return(
    <>
        <div>
          <img src={props.image} style={{height: "400px", width: "400px"}}/>
          <div>
            <h3>{props.login}</h3>
            <p></p>
          </div>
        </div>
      
    </>
  )

}

export default UserCard;
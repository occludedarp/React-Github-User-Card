import React, { fragment } from "react";

function UserCard(props) {
  return(
    <>
      {props.users.map(user => (
        <div key={user.id}>
          <img/>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      ))}
    </>
  )

}

export default UserCard;
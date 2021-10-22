import React from "react";

const User = ({ user }) => {
  const milliseconds = user.createdAt.seconds * 1000;
  const dateObject = new Date(milliseconds);

  const humanDateFormat = dateObject.toLocaleString();
  return (
    <>
      <div className="usercomments-box">
        <h3 id="name">@{user.Name}</h3>
        <p id="comment">{user.Comment}</p>
        <p id="date">{humanDateFormat}</p>
      </div>
    </>
  );
};

export default User;

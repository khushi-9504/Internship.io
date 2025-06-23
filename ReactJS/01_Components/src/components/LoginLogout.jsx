import React, { useState } from "react";

const LoginLogout = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleOnClick() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div
      className="userCard"
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        width: "300px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {loggedIn ? (
        <div
          className="userInfo"
          style={{
            minwidth: "200px",
            width: "250px",
            height: "300px",
            padding: "5px 10px",
            display: "flex",
            flexDirection: "column",
            lineHeight: "0",
            justifyContent: "center",
          }}
        >
          <img
            src="https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg"
            alt="User Profile Image"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              alignSelf: "center",
            }}
          />
          <p>
            <strong>Name: </strong>Khushali Gajera
          </p>
          <p>
            <strong>Email: </strong>khushali@gmail.com
          </p>
          <p>
            <strong>Contact No: </strong>1234567890
          </p>
          <p>
            <strong>Location: </strong>Gujarat
          </p>
          <button
            style={{
              width: "100px",
              alignSelf: "center",
              marginTop: "10px",
              padding: "5px",
              fontSize: "16px",
              borderRadius: "5px",
            }}
            onClick={handleOnClick}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <h1 style={{ textAlign: "center", margin: "20px" }}>Login</h1>
          <div
            className="userInfo"
            style={{
              minwidth: "300px",
              width: "300px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <input
              type="email"
              placeholder="Enter Email"
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "5px",
                margin: "5px auto",
                fontSize: "16px",
              }}
            />
            <input
              type="password"
              placeholder="***********"
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "5px",
                margin: "5px auto",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              onClick={handleOnClick}
              style={{
                width: "100px",
                padding: "10px",
                borderRadius: "5px",
                margin: "5px auto",
                fontSize: "16px",
              }}
            >
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginLogout;

import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

// or via CommonJS
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = () => {
    if (username.length === 0) {
      alert("Enter username");
    } else if (password.length === 0) {
      alert("Enter password");
    } else {
      const url = "http://localhost:4000/confirm";
      const data = {
        username: username,
        password: password,
      };

      axios
        .post(url, data)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            navigate("/profile", {
              state: {
                type: true, //For knowing that we are going to the profile page from login page//
                username: username,
              },
            });
          } else {
            const url = "http://localhost:4000/confirmshopkeeper";
            const data = {
              username: username,
              password: password,
            };

            axios
              .post(url, data)
              .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                  navigate("/stocks", {
                    state: {
                      type: true, //For knowing that we are going to the profile page from login page//
                      username: username,
                    },
                  });
                } else {
                  const url = "http://localhost:4000/confirmadmin";
            const data = {
              username: username,
              password: password,
            };

            axios
              .post(url, data)
              .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                  navigate("/admin", {
                    state: {
                      type: true, //For knowing that we are going to the profile page from login page//
                      username: username,
                    },
                  });
                } else {
                   navigate("/create");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
                  // navigate("/create");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });

            
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleCreate = () => {
    navigate("/create");
  };
  return (
    <div className="loginpage">
      <div className="loginbox">
        <div className="loginboxleft">
          <span>
            LOGIN TO <br /> YOUR <br /> PROFILE
          </span>
        </div>
        <div className="loginboxright">
          <div className="loginboxrightform">
            <label className="username">Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label className="password">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="forgot">Forgot Password?</span>
          </div>
          <div className="loginboxrightbutton">
            <button
              onClick={() => {
                handleSignIn();
              }}
            >
              Sign in
            </button>
            <span
              onClick={() => {
                handleCreate();
              }}
            >
              Create new account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

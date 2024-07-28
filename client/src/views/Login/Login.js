import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import showToast from "crunchy-toast";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    if (email === "") {
      showToast("Email is required", "alert", 3000);
    }

    if (password === "") {
      showToast("Password is required", "alert", 3000);
    }

    const response = await axios.post("/login", {
      email,
      password,
    });

    console.log(response?.data);

    if (response?.data.success) {
      showToast(response.data.message, "success", 3000);
      localStorage.setItem("user", JSON.stringify(response?.data.data));
      window.location.href = "/";
    } else {
      showToast(response.data.message, "warning", 3000);
    }
  };

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storageUser?.email) {
      alert("You are already Logged In.");
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
    
      <section className="form mx-2 my-5">
        <div className="container container-fluid">
          <div
            className="row shadow rounded-3 mx-auto form-container"
            style={{ border: "1px solid grey", backgroundColor: "#ffffff" }}
          >
            <div className="col-md-12">
              
              <h4 className="text-center">Login</h4>
              <div className="mt-3 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-3 mx-auto">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success my-4 px-5"
                  onClick={loginUser}
                >
                  <b>Login</b>
                </button>
                <p className="text-center">
                  <Link to="/signup">Don't have an account? Sign up now.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
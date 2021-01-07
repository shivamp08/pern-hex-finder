import React, { Fragment, useState, useEffect } from "react";
import Content from "./Content";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./stylesheets/Dashboard.css";

const Dashboard = ({ setAuth }) => {
  const [palette, setPalette] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const setCurrPalette = (currPalette) => {
    setPalette(currPalette);
    updateProfile(currPalette);
  };

  const getProfile = async () => {
    try {
      const res = await fetch("api/dashboard", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();
      setPalette(parseRes.palette);
      setName(parseRes.user_name);
      setEmail(parseRes.user_email);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const updateProfile = async (palette) => {
    try {
      const body = { palette };
      console.log(body);
      await fetch("api/dashboard", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          jwt_token: localStorage.token,
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("👋 Logout Successful!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success",
    });
  };

  return (
    <Fragment>
      <div
        style={{ position: "absolute", top: 10, left: 10, textAlign: "left" }}
        className="accountinfo"
      >
        <h6>{name}</h6>
        <h6>{email}</h6>
      </div>
      <Link to="/login">
        <button
          type="button"
          className="btn btn-primary"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.65)",
            border: "0",
          }}
          onClick={(e) => logout(e)}
        >
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </Link>
      <Content
        initColors={palette.length > 0 ? palette.split(",") : []}
        setCurrPalette={setCurrPalette}
      />
    </Fragment>
  );
};

export default Dashboard;

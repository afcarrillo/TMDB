import React from "react";
import { useNavigate } from "react-router";

import axios from "axios";

import useInput from "../hooks/useInput";

const Signup = () => {
  const name = useInput();
  const lastname = useInput();
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/signup", {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        if (res.data.errors) {
          alert("Error: Required correct email e.g. '.com'");
        } else {
          alert("Usuario creado correctamente");
          navigate("/");
        }
      })
      .catch(() => alert("Error: email already exists"));
  };

  return (
    <div>
      <h2 className="is-title is-size-2">Sign up for an account</h2>
      <p>Fill out the form below to get started.</p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input is-rounded"
              type="text"
              placeholder="Your name"
              required
              {...name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Lastname</label>
          <div className="control">
            <input
              className="input is-rounded"
              type="text"
              placeholder="Your lastname"
              required
              {...lastname}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input is-rounded"
              type="email"
              placeholder="example@example.com"
              required
              {...email}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left">
            <input
              className="input is-rounded"
              type="password"
              placeholder="Password"
              required
              {...password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-rounded is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

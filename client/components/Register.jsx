import React from "react"
import { NavLink } from "react-router-dom"

const Register = () => {
  return (
    <div className="form">
      <h1>Register From</h1>
      <div className="innerForm">
        <label htmlFor="password">Name</label>
        <input type="text" placeholder="Name" name="email" className="input" />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" name="email" className="input" />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Password"
          name="Password"
          className="input"
        />
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input
          type="text"
          placeholder="Confirm Password"
          name="ConfirmPassword"
          className="input"
        />
        <input type="submit" value={"Login"} className="SubmitBtn" />
      </div>
      <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <NavLink to={"/"} className={"Link"}>
          Login
        </NavLink>
      </p>
    </div>
  )
}

export default Register

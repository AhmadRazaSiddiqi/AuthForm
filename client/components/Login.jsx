import React from "react"
import { NavLink } from "react-router-dom"

const Login = () => {
  const handleSubmit = () => {}
  return (
    <form className="form">
      <h1>Login From</h1>
      <div className="innerForm">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" name="email" className="input" />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          className="input"
        />
        <input type="submit" value={"Login"} className="SubmitBtn" />
      </div>
      <p style={{ textAlign: "center" }}>
        Dont have an account?{" "}
        <NavLink to={"/register"} className={"Link"}>
          Register
        </NavLink>
      </p>
    </form>
  )
}

export default Login

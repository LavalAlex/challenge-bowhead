import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { FaUserCircle, FaKey, FaEye } from "react-icons/fa";

import { signup } from "../../Redux/Actions/Auth";
import { validateSignup } from "../../Utils/validate";

import style from "./SignupCard.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keyOn, setKeyOn] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    code: "",
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = validateSignup(input);
    if (email || password || name) {
      setErrors((old) => ({
        ...old,
        name: name ? name : "",
        email: email ? email : "",
        password: password ? password : "",
      }));
    } else {
      const code = await dispatch(signup(input));
      if (code.error) {
        setErrors((old) => ({
          ...old,
          code: code.error,
        }));
      } else {
        alert("User created successfully!");
        navigate("/admin/login");
      }
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>- SIGN UP -</h1>
        <label>
          <h5>Name</h5>
          <div
            className={`${style.inputGroup} ${errors.name ? style.error : ""} `}
          >
            <FaUserCircle />
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Enter name"
              autoComplete="off"
            />
          </div>
        </label>
        <div>
          {errors.name ? (
            <span className={style.errorSpan}>{errors.name}</span>
          ) : (
            ""
          )}
        </div>
        <label>
          <h5>Email</h5>
          <div
            className={`${style.inputGroup} ${
              errors.email ? style.error : ""
            } `}
          >
            <FaUserCircle />
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Enter email"
              autoComplete="off"
            />
          </div>
        </label>
        <div>
          {errors.email ? (
            <span className={style.errorSpan}>{errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <label>
          <h5>Password</h5>
          <div
            className={`${style.inputGroupPass} ${
              errors.password ? style.error : ""
            } `}
          >
            <FaKey />
            <input
              type={keyOn ? "text" : "password"}
              value={input.password}
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Enter password"
            />
            <FaEye
              className={style.keyEye}
              onClick={(e) => {
                setKeyOn((old) => !old);
              }}
            />
          </div>
        </label>
        <div>
          {errors.password ? (
            <span className={style.errorSpan}>{errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          {errors.code ? (
            <span className={style.errorSpan}>{errors.code}</span>
          ) : (
            ""
          )}
        </div>
        <div className={style.buttonContainer}>
          <button type="submit">SigUp</button>
        </div>

        <div className={style.buttonContainer}>
          <div>OR</div>
          <button type="submit" onClick={() => navigate("/admin/login")}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

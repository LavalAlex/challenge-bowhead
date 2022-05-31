import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPoll } from "../../Redux/Actions/Poll";
import { useNavigate } from "react-router-dom";
import { validateSubmit } from "../../Utils/validate";

import style from "./select.module.css";

export default function SelectOption() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ mood: "", sleep: "" });
  const [errors, setErrors] = useState({ mood: "", sleep: "" });
  const navigate = useNavigate()

  const handleInput = ({ target: { name, value } }) => {
    setInput((old) => ({
      ...old,
      [name]: value,
    }));

    setErrors({
      mood: "",
      sleep: "",
    });
  };

  
  const handleSubmit = async () => {
    const { mood, sleep } = validateSubmit(input);
    if (mood || sleep) {
      setErrors((old) => ({
        ...old,
        mood: mood ? mood : "",
        sleep: sleep ? sleep : "",
      }));
    } else {
      var conf = window.confirm("Do you want to submit the poll?");
      if (conf) {
        const error = await dispatch(createPoll(input));
        if (error) {
          alert(error.data);
        } else {
          alert("Survey sent successfully");
          navigate('/')
        }
      } else {
        alert("Survey was not sent!");
        navigate('/')
      }
     
    }
  };
  return (
    <div>
      <label className={style.wrapper}>
        <h2>How do you feel?</h2>
        <div>
          <input
            type="radio"
            name="mood"
            value="perfect"
            onChange={handleInput}
          />
          <label>Perfect, thank you!</label>
        </div>

        <div>
          <input type="radio" name="mood" value="meh" onChange={handleInput} />
          <label>Meh, I'm alive</label>
        </div>

        <div>
          <input type="radio" name="mood" value="bad" onChange={handleInput} />
          <label>Worst day ever</label>
        </div>
        {errors.mood ? (
          <span className={style.errorSpan}>{errors.mood}</span>
        ) : (
          ""
        )}
      </label>

      <label className={style.wrapper}>
        <h2>Did you sleep well?</h2>
        <div>
          <input type="radio" name="sleep" value="yes" onChange={handleInput} />
          <label>Yes</label>
        </div>

        <div>
          <input type="radio" name="sleep" value="no" onChange={handleInput} />
          <label>No</label>
        </div>
        {errors.sleep ? (
          <span className={style.errorSpan}>{errors.sleep}</span>
        ) : (
          ""
        )}
      </label>
      <div className={style.buttonContainer} >
        <button type="submit" onClick={handleSubmit}  >Submit</button>

        <div>OR</div>
          <button type="submit" onClick={() => navigate("/admin/login")}>
            ADMIN
          </button>
      </div>
    </div>
  );
}

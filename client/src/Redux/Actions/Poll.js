import axios from "axios";
import { ALL_POLL, CREATE_POLL, URL_ALL_POLL, URL_CREATE_POLL } from "./ActionsTypes";

export function allPoll(token){
    return async (dispatch) => {
        try {
          const response = await axios.get(URL_ALL_POLL,{
            headers: { Authorization: `Bearer ${token}` },
          });
          dispatch({ type: ALL_POLL, payload: response });
        } catch (e) {
          console.log(e)
          return e.response
        }
      };
}

export function createPoll(data){
  return async (dispatch) => {
    try {
      const response = await axios.post(URL_CREATE_POLL,data);
      dispatch({ type: CREATE_POLL, payload: response });
    } catch (e) {
      console.log(e)
      return e.response
    }
  };
}
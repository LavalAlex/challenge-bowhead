import Cookie from "universal-cookie";
import { saveLocal } from "../../Utils/storage";
import { LOGIN, LOGOUT, SIGNUP } from "../Actions/ActionsTypes";
const cookie = new Cookie();
const initialState = cookie.get("challenge") || {};

export default function root(state = initialState, action) {
  switch (action.type) {
    case LOGIN: 
      saveLocal("challenge", action.payload.data);
      cookie.set("challenge", action.payload.data);
      return cookie.get("challenge");
      
    case SIGNUP:
      return{
        ...state,
        state: action.payload.status
      }

    case LOGOUT:
      cookie.remove("challenge");
      return {};

    default:
      return state;
  }
}

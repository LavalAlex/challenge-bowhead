import { ALL_POLL, CREATE_POLL } from "../Actions/ActionsTypes";

const initialState = {
  poll: [],
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case ALL_POLL:
      return {
        ...state,
        poll: action.payload.data,
      };

    case CREATE_POLL:
      return{
      ...state
    }

    default:
      return state;
  }
}

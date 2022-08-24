import { StatusAction, StatusState, actionTypesStatus } from "../../interfaces";

const initialState: StatusState = {
  account: null,
  authed: false,
};

const status = (state = initialState, action: StatusAction): StatusState => {
  switch (action.type) {
    case actionTypesStatus.SET_STATUS:
      console.log("redux SET_STATUS:", action);
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    default:
      return state;
  }
};

export default status;

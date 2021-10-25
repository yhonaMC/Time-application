import { loginTypes, userTypes } from "../types/type";

const initialState = {};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.loginGoogle:
      return action.payload;

    case loginTypes.loginFacebook:
      return action.payload;

    case loginTypes.registerEmail:
      return action.payload;

    case loginTypes.logout:
      return initialState;

    case userTypes.putUserL:
      return action.payload;

    default:
      return state;
  }
};

export default LoginReducer;

import { TOGGLE_SIDEBAR, CHANGE_HEADER_THEME, SET_PRICING } from "./appTypes";

const initialState = {
  sidebarOpened: false,
  headerTheme: "light",
  pricingActive: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened };

    case SET_PRICING:
      return { ...state, pricingActive: action.payload };

    case CHANGE_HEADER_THEME:
      return { ...state, headerTheme: action.payload };

    default:
      return state;
  }
};

export default appReducer;

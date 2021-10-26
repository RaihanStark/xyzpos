import { TOGGLE_SIDEBAR, CHANGE_HEADER_THEME } from "./appTypes";

const initialState = {
  sidebarOpened: false,
  headerTheme: "light",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened };

    case CHANGE_HEADER_THEME:
      return { ...state, headerTheme: action.payload };
    default:
      return state;
  }
};

export default appReducer;

import {
  TOGGLE_SIDEBAR,
  CHANGE_HEADER_THEME,
  SET_PRICING,
  SET_MODAL_OPENED,
  SET_MODAL_NAME_OPENED,
} from "./appTypes";

const initialState = {
  sidebarOpened: false,
  headerTheme: "light",
  pricingActive: false,
  modalOpened: false,
  modalNameOpened: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened };

    case SET_PRICING:
      return { ...state, pricingActive: action.payload };

    case SET_MODAL_OPENED:
      return { ...state, modalOpened: action.payload };

    case SET_MODAL_NAME_OPENED:
      return { ...state, modalNameOpened: action.payload };

    case CHANGE_HEADER_THEME:
      return { ...state, headerTheme: action.payload };

    default:
      return state;
  }
};

export default appReducer;

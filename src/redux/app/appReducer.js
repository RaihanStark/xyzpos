import { TOGGLE_SIDEBAR } from "./appTypes";

const initialState = {
  sidebarOpened: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened };

    default:
      return state;
  }
};

export default appReducer;

import { TOGGLE_SIDEBAR, CHANGE_HEADER_THEME, SET_PRICING } from "./appTypes";

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
    description: "Toggle Sidebar Menu",
  };
};

export const setPricing = (isActive) => {
  return {
    type: SET_PRICING,
    description: "set pricing Menu",
    payload: isActive,
  };
};

export const changeHeaderTheme = (theme) => {
  return {
    type: CHANGE_HEADER_THEME,
    description: "Changing header theme for scroll handler",
    payload: theme,
  };
};

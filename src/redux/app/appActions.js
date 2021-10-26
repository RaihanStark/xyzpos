import { TOGGLE_SIDEBAR, CHANGE_HEADER_THEME } from "./appTypes";

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
    description: "Toggle Sidebar Menu",
  };
};

export const changeHeaderTheme = (theme) => {
  return {
    type: CHANGE_HEADER_THEME,
    description: "Changing header theme for scroll handler",
    payload: theme,
  };
};

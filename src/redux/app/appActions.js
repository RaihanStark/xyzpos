import {
  TOGGLE_SIDEBAR,
  CHANGE_HEADER_THEME,
  SET_PRICING,
  SET_MODAL_OPENED,
  SET_MODAL_NAME_OPENED,
} from "./appTypes";

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

export const setModalOpened = (modalOpened) => {
  return {
    type: SET_MODAL_OPENED,
    description: "set modal is open",
    payload: modalOpened,
  };
};

export const setModalNameOpened = (modalOpened) => {
  return {
    type: SET_MODAL_NAME_OPENED,
    description: "set which modal is open",
    payload: modalOpened,
  };
};

export const changeHeaderTheme = (theme) => {
  return {
    type: CHANGE_HEADER_THEME,
    description: "Changing header theme for scroll handler",
    payload: theme,
  };
};

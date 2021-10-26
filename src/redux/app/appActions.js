import { TOGGLE_SIDEBAR } from "./appTypes";

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
    description: "Toggle Sidebar Menu",
  };
};

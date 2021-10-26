import { ADD_PRICING } from "./pricingTypes";

export const addPricing = (pricing) => {
  return {
    type: ADD_PRICING,
    description: "Adding item to pricing",
    payload: pricing,
  };
};

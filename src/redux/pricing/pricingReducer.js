import { ADD_PRICING } from "./pricingTypes";

const initialState = {
  pricing: [],
};

const pricingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRICING:
      return { pricing: [...action.payload] };

    default:
      return state;
  }
};

export default pricingReducer;

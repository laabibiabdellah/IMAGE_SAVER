import { initialState } from "./initialState";

export let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_IMG":
      return {
        ...state,
        imgs: [...state.imgs, action.payload],
      };

    case "REMOVE_IMG":
      return {
        ...state,
        imgs: state.imgs.filter((img) => img !== action.payload),
      };
    default:
      return state;
  }
};

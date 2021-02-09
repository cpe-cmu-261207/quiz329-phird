export const initialState = {
  inputData: []
};

export function PeopleReducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        inputData: [...state.inputData, action.payload]
      };
    case "SET_PEOPLE":
      return {
        ...state,
        inputData: action.payload
      };
    default:
      throw new Error();
  }
}

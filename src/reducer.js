const initialState = { open: false,
   data: {},
   dataApi: []
   };
const reducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "SHOWSNACKBAR":
      return { ...state, open: true, data: action.data };
    case "HIDESNACKBAR":
      return { ...state, open: false, data: {} };
    case "GET_API_SUCCESS":
      return {...state, dataApi: action.payload}
      default:
      return state;
  }
};
export default reducer;

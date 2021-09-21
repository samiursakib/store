const initialState = {
  customers: [],
  products: [],
  orders: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return { ...state, customers: action.data };
    case "CREATE_CUSTOMER":
      return { ...state, customers: [...state.customers, action.data] };
    default:
      return state;
  }
};

export default rootReducer;

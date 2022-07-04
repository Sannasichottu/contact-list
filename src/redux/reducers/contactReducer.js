const initialState = [
    {
      id: 0,
      name: "sannasi",
      email: "sannasi@gmail.com",
      number: 7272076762,
    },
    {
      id: 1,
      name: "chottu",
      email: "chottu@gmail.com",
      number: 9876543210,
    },
    {
      id: 2,
      name: "Dhojay",
      email: "dhojay@gmail.com",
      number: 7272075762,
    },
    {
      id: 3,
      name: "Vijay",
      email: "vj@gmail.com",
      number: 9876543654,
    },
    {
      id: 4,
      name: "Tamil",
      email: "tamil@gmail.com",
      number: 7272567624,
    },
    {
      id: 5,
      name: "Laxmi",
      email: "laxmi@gmail.com",
      number: 8468893629,
    },
   
  ];
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "UPDATE_CONTACT":
        const updateState = state.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state = updateState;
        return state;
      case "DELETE_CONTACT":
        const filterContacts = state.filter(
          (contact) => contact.id !== action.payload && contact
        );
        state = filterContacts;
        return state;
      default:
        return state;
    }
  };
  
  export default contactReducer;
  
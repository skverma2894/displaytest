const initialState = {
  data: [],
};

const tReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD":
      return { data: payload };

    case "DELETE":
      console.log(`payload: ${payload}`);
      const newData = state.data.filter((item) => item.id !== payload);

      return { data: [...newData] };

    case "EDIT":
      console.log(`payload: ${payload}`);
      //   const newData = state.data.filter((item) => item.id !== payload);

      return state;

    default:
      return state;
  }
};

export default tReducer;

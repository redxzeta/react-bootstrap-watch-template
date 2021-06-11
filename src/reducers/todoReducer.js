export const todoInitialState = {
  todos: ["wow"],
  comments: [],
};

// const fetchData = async () => {
//   let json = {};
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "GET",
//     });
//     json = await response.json();
//     return json;
//   } catch (err) {
//     console.log(err);
//   }
//   return json;
// };

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS": {
      let json = {};

      const response = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      json = response.json();

      return {
        ...state,
        todos: json,
      };
    }
    default:
      return { state };
  }
};

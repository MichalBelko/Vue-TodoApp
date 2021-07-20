const store = {
  state: {
    todos: [
      {
        _id: "1",
        title: "Walk the dog",
        description: "Go to forest near the Zoo",
      },

      {
        _id: "2",
        title: " Go Shopping",
        description: "Buy bread, milk, butter and water",
      },
      {
        _id: "3",
        title: "Learn programming",
        description: "Learn vue Router and fetching data",
      },
    ],
  },
  createTodo(todo) {
    todo._id = Math.random()
      .toString(36)
      .substr(2, 7);
    this.state.todos.push(todo);
  },
};

export default store;

<template>
  <div class="todo-container">
    <div class="flex-wrapper">
      <TodoList :todos="todos" />
    </div>
    <div class="todo-create-btn-container">
      <Modal />
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { TodoList, Modal },
  data() {
    return {
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
    };
  },
  methods: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
.app-btn {
  font-size: 20px;
  padding: 12px;
  border-radius: 5px;
  background-color: fuchsia;
  font-weight: bold;
  color: white;
  cursor: pointer;
  width: 150px;
}
.todo-create-btn-container {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.todo-container {
  width: 500px;
  padding: 10px;
  height: auto;
  background-color: #ededed;
  box-shadow: 6px 6px 5px 2px rgb(107, 107, 107), 8px 8px 10px 5px black;
  border-radius: 5px;
}
.flex-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>

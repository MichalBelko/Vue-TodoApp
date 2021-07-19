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
.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 1px black solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 15px;
  color: black;
  caret-color: black;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
}
.form-control input:valid {
  border-bottom: 2px black solid;
}

.app-form {
  display: block;
  width: 30%;
  margin: 0 auto;
  padding: 0 20px;
}
.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
  font-weight: bold;
}
.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  transform: translateY(-30px);
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

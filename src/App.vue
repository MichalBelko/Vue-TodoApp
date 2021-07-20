<template>
  <div class="todo-container">
    <div class="flex-wrapper">
      <TodoList :todos="todos" />
    </div>
    <div class="todo-create-btn-container">
      <TodoCreate @formSubmitted="createTodo" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";
import store from "@/store";
export default {
  name: "app",
  components: {
    TodoList,
    TodoCreate,
  },
  data() {
    return {
      todos: store.state.todos,
    };
  },

  methods: {
    createTodo(todo) {
      store.dispatch("createTodo", todo);
    },
  },
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
  height: 100%;
  flex-direction: column;
  padding: 10vh 0;
}

button:focus,
button:active {
  border: none;
  outline: none;
}
.ripple {
  font-size: 20px;
  padding: 12px;
  border-radius: 5px;
  background-color: #47ca47;
  font-weight: bold;
  color: white;
  cursor: pointer;
  width: 150px;
  border: none;
  position: relative;
  overflow: hidden;
}
.app-btn {
  font-size: 20px;
  padding: 12px;
  border-radius: 5px;
  background-color: #ff00ff;
  font-weight: bold;
  color: white;
  cursor: pointer;
  width: 150px;
  transition: all 0s 50ms ease-out;
}
.app-btn:hover {
  transform: scale(1.02);
  cursor: pointer;
}
.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 400px;
}
.ripple .circle {
  position: absolute;
  background-color: #259c25;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: scale 0.5s ease-out;
  color: white;
}

@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 1px #000000 solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 15px;
  color: #000000;
  caret-color: #000000;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
}
.form-control input:valid {
  border-bottom: 2px black solid;
}

.app-form {
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

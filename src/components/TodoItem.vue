<template>
  <div class="todo-item" v-if="!editMode">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{ title }}
      </div>
      <div class="todo-item-content-description">
        {{ description }}
      </div>
      <button class="TodoItemBtn is-warning" @click="editMode = true">
        Edit
      </button>
      <button class="TodoItemBtn is-danger" @click="deleteTodo">
        Delete
      </button>
    </div>
  </div>
  <div v-else class="todo-item">
    <form class="app-form2">
      <div class="form-control2">
        <label>Title</label>
        <input type="text" required :value="title" />
      </div>
      <div class="form-control2">
        <label>Description</label>
        <textarea cols="30" rows="2" :value="description"></textarea>
      </div>
      <button class="TodoItemBtn is-warning" @click.prevent="editTodo">
        Update
      </button>
      <button class="TodoItemBtn is-danger" @click.prevent="editMode = false">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    editTodo() {
      this.editMode = true;
    },
    deleteTodo() {},
  },
};
</script>

<style scoped>
.form-control2 {
  padding: 5px;
}
.form-control2 label {
  display: block;
  text-align: left;
  font-size: 21px;
  padding: 5px 0;
}
.form-control2 input {
  font-size: 18px;
  padding: 5px;
  border: none;
  outline: none;
  text-align: left;
  display: block;
  width: 100%;
}
.form-control2 textarea {
  font-size: 18px;
  padding: 5px;
  border: none;
  outline: none;
  text-align: left;
  display: block;
  width: 100%;
}
.TodoItemBtn {
  all: unset;
  font-size: 17px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ff00ff;
  font-weight: bold;
  color: white;
  cursor: pointer;
  display: inline-block;
  transition: all 0s 50ms ease-out;
  margin: 5px;
  margin-top: 5px;
}
.TodoItemBtn.is-warning {
  background-color: #ffa753;
  display: inline-block;
}
.TodoItemBtn.is-danger {
  background-color: #ff5a5a;
}
.todo-item {
  background-color: gray;
  margin: 10px;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 23px;
}
.todo-item-content {
  position: relative;
}

.todo-item-content-title {
  font-weight: bold;
  margin-bottom: 5px;
  border-bottom: 2px solid white;
  display: inline-block;
}

.todo-item-content-description {
  font-size: 20px;
}
</style>

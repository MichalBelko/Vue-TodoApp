<template>
  <div class="container">
    <Header
      :showAddTask="showAddTask"
      title="Task tracker"
      @toggle-add-task="toggleAddTask"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "app",
  components: { Header, Tasks, AddTask },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(task) {
      this.showAddTask = false;
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(function(task) {
        return task.id !== id;
      });
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map(function(task) {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      });
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        day: "March 3rd at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "March 3rd  at 11:00am",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

input:focus,
input:active {
  outline: none;
  border: none;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid rgb(99, 121, 139);
  border-radius: 5px;
  padding: 30px;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.btn {
  display: inline-block;
  background-color: green;
  border: none;
  color: white;
  border-radius: 5px;
  margin: 5px;
  padding: 10px 20px;
  font-size: 15px;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>

<template>
  <AddTask @add-task="addTask" v-if="showAddTask" />

  <Tasks
    :tasks="tasks"
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
  />
</template>

<script>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
      localStorage.setItem("newTask", JSON.stringify(this.tasks));
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
    const newTask = JSON.parse(localStorage.getItem("newTask"));
    this.tasks = newTask;
  },
};
</script>

<style></style>

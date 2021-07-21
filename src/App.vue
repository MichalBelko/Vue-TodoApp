<template>
  <div class="container">
    <Header
      :showAddTask="showAddTask"
      title="Task tracker"
      @toggle-add-task="toggleAddTask"
    />

    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: { Header, Footer },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #eee;
  overflow-x: hidden;
  display: block;
  background-color: #b61924;
}
h3 {
  margin: 0;
}
p {
  margin: 0;
}
//particles
canvas {
  display: block;
  vertical-align: bottom;
}
#particles-js {
  position: absolute;
  width: 100vw;
  height: auto;
  inset: 0;
  background-color: #b61924;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
//particles
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
  position: relative;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.836);
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

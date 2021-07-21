<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      v-if="!showAddTask"
      text="Add Task"
      @toggle-add-task="$emit('toggle-add-task')"
      class="btn-green"
    />
    <Button
      v-show="homePage"
      v-if="showAddTask"
      text="Close"
      @toggle-add-task="$emit('toggle-add-task')"
      class="btn-red"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  name: "Header",
  props: ["title", "showAddTask"],
  data() {
    return {};
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}
.btn-red {
  background-color: red;
}
.btn-green {
  background-color: green;
}
</style>

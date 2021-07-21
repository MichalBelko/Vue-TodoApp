<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-if="!showAddTask"
      text="Add Task"
      @toggle-add-task="$emit('toggle-add-task')"
    />
    <Button
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
</style>

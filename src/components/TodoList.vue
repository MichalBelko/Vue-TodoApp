<template>
  <div class="todo-list" v-for="todo in todos" :key="todo._id">
    <TodoItem :title="todo.title" :description="todo.description" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>

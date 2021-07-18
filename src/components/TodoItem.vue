<template>
  <div class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{ title }}
      </div>
      <div class="todo-item-content-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.todo-item {
  background-color: gray;
  margin: 10px;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 23px;
}

.todo-item-content-title {
  font-weight: bold;
  margin-bottom: 3px;
}

.todo-item-content-description {
  font-size: 20px;
}
</style>

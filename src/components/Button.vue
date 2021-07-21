<template>
  <button @click="onClick" class="btn">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "color"],
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>

<style>
.btn {
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Arial;
}
</style>

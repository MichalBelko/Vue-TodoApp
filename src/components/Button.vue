<template>
  <button @click="onClick" class="btn">{{ text }}</button>
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

<style></style>

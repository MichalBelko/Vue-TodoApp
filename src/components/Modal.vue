<template>
  <div class="todo-create-btn-container">
    <div class="app-btn" @click="isOpen = true">
      Create
    </div>
  </div>
  <div class="modal" :class="{ isActive: isOpen }">
    <div class="modal-content">
      <span class="close" @click="isOpen = false">&times;</span>
      <p>Modal Window</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.modal.isActive {
  display: block;
}
.modal {
  display: none;
  background-color: rgba(0, 0, 0, 0.404);
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 2;
  margin: 0 auto;
  left: 0;
  top: 0;
}
.close {
  color: rgba(0, 0, 0, 0.664);
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 30px;
  font-weight: bold;
}
.close:hover {
  cursor: pointer;
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  width: 80%;

  position: relative;
}
</style>

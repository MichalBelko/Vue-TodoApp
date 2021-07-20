<template>
  <div class="app-btn" @click="openModal">
    Create
  </div>
  <div class="modal" :class="{ isActive: isOpen }" @click.self="isOpen = false">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  // props: ["close"],
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    close(isClose) {
      if (isClose && this.isOpen) {
        this.isOpen = false;
      }
    },
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
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
  height: auto;
  overflow: auto;
  z-index: 2;
  margin: 0 auto;
  left: 0;
  top: 0;
  padding: 0 50px;
}
.close {
  color: rgba(0, 0, 0, 0.664);
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 70px;
  font-weight: bold;
}
.close:hover {
  cursor: pointer;
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 30px;
}
</style>

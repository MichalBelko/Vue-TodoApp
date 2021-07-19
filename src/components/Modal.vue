<template>
  <div class="todo-create-btn-container">
    <div class="app-btn" @click="openModal">
      Create
    </div>
  </div>
  <div class="modal" :class="{ isActive: isOpen }" @click.self="isOpen = false">
    <div class="modal-content">
      <span class="close" @click="isOpen = false">&times;</span>
      <form class="app-form">
        <div class="form-control">
          <input type="text" required />
          <label>Title</label>
          <!-- <label>
            <span style="transition-delay: 0ms">E</span>
              <span style="transition-delay: 50ms">m</span>
              <span style="transition-delay: 100ms">a</span>
              <span style="transition-delay: 150ms">i</span>
              <span style="transition-delay: 200ms">l</span>
        </label> -->
        </div>
        <div class="form-control">
          <input type="text" required />
          <label>Description</label>
        </div>
        <button class="app-button is-primary" type="button">
          Create
        </button>
      </form>
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
  methods: {
    openModal() {
      this.isOpen = true;
      const modal = document.querySelector(".modal");

      if (modal.classList.contains("isActive")) {
        console.log("dasdasda");
      }
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
  font-size: 30px;
  font-weight: bold;
}
.close:hover {
  cursor: pointer;
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 30px;

  position: relative;
}

.app-button {
  font-size: 20px;
  padding: 12px;
  border-radius: 5px;
  background-color: #47ca47;
  font-weight: bold;
  color: white;
  cursor: pointer;
  width: 150px;
  border: none;
}
</style>

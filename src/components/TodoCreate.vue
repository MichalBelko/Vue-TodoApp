<template>
  <Modal ref="modal">
    <form class="app-form">
      <div class="form-control">
        <input type="text" required v-model="form.title" />
        <label>Title</label>
      </div>
      <div class="form-control">
        <input type="text" required v-model="form.description" />
        <label>Description</label>
      </div>
      <div class="app-error">
        <div class="form-error">
          {{ formError }}
        </div>
      </div>
      <button class="app-button ripple" type="button" @click="submitForm">
        Create
      </button>
    </form>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      formError: "",
    };
  },
  computed: {
    isFormValid() {
      if (this.form.title.length > 8 && this.form.description.length > 10) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    submitForm() {
      if (this.isFormValid) {
        this.formError = "";
        this.$emit("formSubmitted", { ...this.form });
        this.$refs.modal.close();

        this.form.title = "";
        this.form.description = "";
      } else {
        this.formError =
          "Title needs to be longer than 8 chars and description longer than 10 chars";
      }
    },
  },
};
</script>

<style>
.form-error {
  color: red;
  margin: 15px auto;
  text-align: center;
}
</style>

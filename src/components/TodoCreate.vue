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
import Modal from "@/components/Modal";
export default {
  emits: ["formSubmitted"],
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
      return this.form.title.length > 8 && this.form.description.length > 10
        ? true
        : false;
    },
    modal() {
      return this.$refs.modal;
    },
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.formError = "";
        this.$emit("formSubmitted", { ...this.form });
        this.modal.close();
        this.resetForm();
      } else {
        this.formError =
          "Form Error! Title needs to be longer than 8 chracters and description longer than 10 characters!";
      }
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
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

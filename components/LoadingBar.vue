<template>
  <div v-if="loading" class="loading-page bg-light row m-0 p-0">
    <div class="d-flex justify-content-center align-items-center">
      <div class="text-center d-flex align-items-center flex-column">
        <img
          src="~/static/img/logo.png"
          alt="sasthosebok.com"
          class="d-none"
          width="50"
        />
        <div class="spinner-grow my-5" role="status">
          <!-- <small class="  small fw-bold mt-1 text-muted" style="font-size:10px">Loading...</small> -->
        </div>

        <!-- <span class="visually-hidden">Loading...</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    msg: null,
  }),
  methods: {
    start(msg = null) {
      this.loading = true;
      this.msg = msg;
    },

    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  z-index: 9999 !important;
}
</style>

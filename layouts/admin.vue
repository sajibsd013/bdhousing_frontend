<template>
  <div class="root bg-light">
    <AdminNavbar />
    <div class="admin_root">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  mounted() {
    this.$store.dispatch("get_data");
    this.$store.dispatch("house/get_data");
  },
};
</script>

<style>
/* @import url(http://fonts.googleapis.com/icon?family=Material+Icons); */
.sorting {
  /* font-size: 16px !important; */
  font-weight: 500 !important;
}
table tr td {
  /* display: none!important; */
  white-space: normal !important;
}

ul.material-pagination {
  list-style-type: none;
}
.root {
  min-height: 100vh !important;
}
.admin_root {
  margin-left: 210px;
}
@media only screen and (max-width: 768px) {
  .admin_root {
    margin-left: 0px;
  }
}
</style>

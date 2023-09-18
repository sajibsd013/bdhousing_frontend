<template>
  <div class="container">
    <div class="card shadow p-2 my-3 border-0">
      <DataTable
        title="ব্যবহারকারী"
        :columns="users_columns"
        :rows="users"
        class="table-responsive"
      >
        <th slot="thead-tr">Actions</th>
        <template slot="tbody-tr" scope="props">
          <td class="d-flex">
            <NuxtLink
              :to="`/admin/users/update?username=${props.row.username}`"
              class="btn red darken-2 waves-effect waves-light compact-btn"
            >
              <i class="material-icons white-text">edit</i>
            </NuxtLink>
            
          </td>
        </template>
      </DataTable>
    </div>
    <div class="pb-5">
      <div
        class="col-lg-4 col-md-7 mx-auto p-3 border card shadow my-3 border-0"
      >
        <h6 class="mb-3">নতুন ব্যবহারকারী যোগ করুন</h6>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(addUser)">
            <div class="mb-3">
              <label for="username" class="form-label small">Username</label>
              <input
                class="form-control form-control-sm"
                id="username"
                placeholder="Enter your username"
                v-model="form_data.username"
              />
            </div>
            <div class="mb-3">
              <label for="password1" class="form-label small">Password</label>
              <input
                class="form-control form-control-sm"
                id="password1"
                type="password"
                placeholder="Enter your password"
                v-model="form_data.password1"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label small">Retype Password</label>
              <input
                class="form-control form-control-sm"
                id="password"
                type="password"
                placeholder="Enter your password"
                v-model="form_data.password"
              />
            </div>
            <div class="d-grid gap-2">
              <button
                class="btn btn-primary btn-sm"
                type="submit"
                :disabled="form_data.password1 != form_data.password"
              >
                Add user
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  head() {
    return {
      title: "Admin || Users ",
    };
  },

  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      users: [],
      users_columns: [
        { label: "ID", field: "id" },
        { label: "Username", field: "username" },
        { label: "Name", field: "full_name" },
        { label: "Email", field: "email" },
      ],
      form_data: {
        username: "",
        password: "",
        password1: "",
      },
    };
  },

  computed: {},
  methods: {
    async getUsers() {
      await this.$axios
        .get(`/auth/users/`)
        .then((res) => {
          if (res.status === 200) {
            this.users = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    formReset() {
      this.form_data.username = "";
      this.form_data.password = "";
      this.form_data.password1 = "";
    },
    async addUser() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`auth/register`, this.form_data, {
            headers: {
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            this.$toast.success("Success! User added");
            this.formReset();
            this.getUsers();
            this.$nuxt.$loading.finish();
            console.log(res);
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();
            this.$toast.error(error.message || error.response.data.message);

            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  mounted() {
    this.getUsers();
  },
  name: "Users",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || !this.$auth.user.is_admin) {
      this.$router.push("/admin");
    }
  },
};
</script>

<style>
/* Materialize Table style */
</style>

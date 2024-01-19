<template>
  <div class="card p-2 my-3 border-0">
    <div class="row">
      <div class="mb-2 col-md-2 col-6">
        <label for="Division " class="small form-label">বিভাগ</label>
        <select
          class="form-select form-select-sm"
          aria-label="Default select example"
          v-model="form_data.division"
          required
        >
          <option value="" selected>All</option>
          <template v-for="data in getDivisions">
            <option :value="data" :key="data.id">
              {{ data.bn_name }}
            </option>
          </template>
        </select>
      </div>

      <div class="mb-2 col-md-2 col-6">
        <label for="districts" class="small form-label">জেলা</label>
        <select
          class="form-select form-select-sm"
          aria-label="Default select example"
          v-model="form_data.district"
          required
        >
          <option value="" selected>All</option>

          <template v-for="data in getDistricts">
            <option :value="data" :key="data.id">
              {{ data.bn_name }}
            </option>
          </template>
        </select>
      </div>

      <div class="mb-2 col-md-2 col-6">
        <label for="upazilas" class="small form-label">উপজেলা</label>
        <select
          class="form-select form-select-sm"
          aria-label="Default select example"
          v-model="form_data.upazila"
          required
        >
          <option value="" selected>All</option>

          <template v-for="data in getUpazilas">
            <option :value="data" :key="data.id">
              {{ data.bn_name }}
            </option>
          </template>
        </select>
      </div>

      <div class="mb-2 col-md-2 col-6">
        <label for="union" class="small form-label">ইউনিয়ন</label>
        <select
          class="form-select form-select-sm"
          aria-label="Default select example"
          v-model="form_data.union"
          required
        >
          <option value="" selected>All</option>
          <template v-for="data in getUnions">
            <option :value="data.bn_name" :key="data.id">
              {{ data.bn_name }}
            </option>
          </template>
        </select>
      </div>

      <div class="mb-2 col-md-2 col-6">
        <label for="ওয়ার্ড" class="small form-label">ওয়ার্ড</label>
        <select
          class="form-select form-select-sm"
          aria-label="Default select example"
          v-model="form_data.ward"
          required
        >
          <option value="" selected>All</option>
          <template v-for="number in 9">
            <option :value="convertToBengali(number)" :key="number">
              {{ convertToBengali(number) }}
            </option>
          </template>
        </select>
      </div>
    </div>
    <DataTable
      title="কর মূল্যয়ন খানা প্রদানের তথ্য"
      :columns="columns"
      :rows="getSortedList"
      class="table-responsive"
    >
      <th slot="thead-tr">Actions</th>
      <template slot="tbody-tr" scope="props">
        <td class="d-flex">
          <NuxtLink
            :to="`/tax?id=${props.row.id}`"
            class="btn red darken-2 waves-effect waves-light compact-btn"
          >
            <i class="material-icons white-text">edit</i>
          </NuxtLink>
          <button
            class="btn red darken-2 waves-effect waves-light compact-btn"
            @click="(e) => deleteData(props.row, e)"
          >
            <i class="material-icons white-text">delete</i>
          </button>
        </td>
      </template>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      columns: [
        { label: "বাড়ির/ দোকান মালিকের নাম", field: "name" },
        { label: "পিতার নাম", field: "father" },
        { label: "পরিবারের সদস্য (পুরুষ)", field: "total_male" },
        { label: "পরিবারের সদস্য (মহিলা)", field: "total_female" },

        { label: "বিভাগ", field: "division" },
        { label: "জেলা", field: "district" },
        { label: "উপজেলা", field: "upazila" },
        { label: "ইউনিয়ন", field: "union" },
        { label: "ওয়ার্ড", field: "ward" },
        { label: "গ্রাম", field: "village" },

        { label: "ইউনিয়ন কোড", field: "union_code" },
        { label: "মোবাইল নং", field: "mobile" },

        { label: "আয়ের উৎস", field: "income_source" },
        { label: "গৃহ ভবনের প্রকৃতি", field: "building_nature" },
        { label: "হাল ট্যাক্স", field: "hall_tax" },
      ],
      form_data: {
        division: "",
        district: "",
        upazila: "",
        union: "",
        ward: "",
      },
    };
  },
  computed: {
    getDivisions() {
      return this.$store.getters["getGeodata"]["divisions"];
    },
    getDistricts() {
      let dist_list = this.$store.getters["getGeodata"]["districts"];
      if (dist_list) {
        dist_list = dist_list.filter(({ division_id }) => {
          return this.form_data.division["id"] == division_id;
        });
      }
      return dist_list;
    },
    getUpazilas() {
      let up_list = this.$store.getters["getGeodata"]["upazilas"];
      if (up_list) {
        up_list = up_list.filter(({ district_id }) => {
          return this.form_data.district["id"] == district_id;
        });
      }
      return up_list;
    },
    getUnions() {
      let un_list = this.$store.getters["getGeodata"]["unions"];
      if (un_list) {
        un_list = un_list.filter(({ upazilla_id }) => {
          return this.form_data.upazila["id"] == upazilla_id;
        });
      }
      return un_list;
    },
    getUserID() {
      if (this.$auth.user.id) {
        return this.$auth.user.id;
      }
      return "";
    },
    getSortedList() {
      let temp_data = this.data;
      if (!this.$auth.user.is_admin) {
        temp_data = temp_data.filter(({ user }) => {
          return this.getUserID == user;
        });
      }
      if (this.form_data.division) {
        temp_data = temp_data.filter(({ division }) => {
          return this.form_data.division["bn_name"] == division;
        });
      }
      if (this.form_data.district) {
        temp_data = temp_data.filter(({ district }) => {
          return this.form_data.district["bn_name"] == district;
        });
      }
      if (this.form_data.upazila) {
        temp_data = temp_data.filter(({ upazila }) => {
          return this.form_data.upazila["bn_name"] == upazila;
        });
      }
      if (this.form_data.union) {
        temp_data = temp_data.filter(({ union }) => {
          return this.form_data.union == union;
        });
      }
      if (this.form_data.ward) {
        temp_data = temp_data.filter(({ ward }) => {
          return this.form_data.ward == ward;
        });
      }

      return temp_data;
    },
  },
  methods: {
    convertToBengali(number){
      const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      // Convert each digit of the number
      const bengaliDigits = number
        .toString()
        .split('')
        .map(digit => (englishNumbers.includes(digit) ? bengaliNumbers[englishNumbers.indexOf(digit)] : digit));
        return bengaliDigits.join('');
    },
    async getData() {
      await this.$axios
        .get(`tax`)
        .then((res) => {
          if (res.status === 200) {
            this.data = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async deleteData(data) {
      console.log(data);
      if (window.confirm("Are you sure ?")) {
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
          this.$axios
            .delete(`/tax/${data.id}/`, {
              headers: {
                // "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              this.getData();
              this.$nuxt.$loading.finish();
            })
            .catch((error) => {
              this.$nuxt.$loading.finish();
              this.$toast.error(error.message || error.response.data.message);

              console.log(error.message || error.response.data.message);
            });
        });
      }

      return;
    },
  },
  mounted() {
    this.getData();
  },
  name: "Tax",
};
</script>

<style>
/* Materialize Table style */
</style>

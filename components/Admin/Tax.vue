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
      <div class="mb-2 col-md-2 col-6">
        <label for="collection_year" class="small form-label">আদায় সন</label>
        <select
          class="form-select form-select-sm"
          aria-label="Default select example"
          v-model="form_data.collection_year"
          required
        >
          <option value="" selected>All</option>
          <template v-for="number in getYears">
            <option :value="convertToBengali(number)" :key="number">
              {{ convertToBengali(number) }}
            </option>
          </template>
        </select>
      </div>
      <div class="mb-2 col-md-2 col-6">
        <label for="holding" class="small form-label">হোল্ডিং নম্বর</label>
        <input
          class="form-control form-control-sm"
          id="holding"
          required
          v-model="form_data.holding"
        />
      </div>
    </div>
    <CustomDataTable
      title="কর মূল্যয়ন খানা প্রদানের তথ্য"
      :columns="columns"
      :rows="getSortedList"
      :tableData="table_data"
      class="table-responsive"
      ref="data_table"
    >
      <th slot="thead-tr">Actions</th>
      <template slot="tbody-tr" scope="props">
        <td class="d-flex">
          <NuxtLink
            :to="`/house?id=${props.row.id}&page=${table_data.currentPage}`"
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
    </CustomDataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      columns: [
        { label: "নাম", field: "name" },
        { label: "হোল্ডিং নম্বর", field: "holding" },
        { label: "পিতা/স্বামী", field: "father" },
        { label: "পরিবারের সদস্য (পুরুষ)", field: "total_male" },
        { label: "পরিবারের সদস্য (মহিলা)", field: "total_female" },
        { label: "বিভাগ", field: "division" },
        { label: "জেলা", field: "district" },
        { label: "উপজেলা", field: "upazila" },
        { label: "ইউনিয়ন", field: "union" },
        { label: "ওয়ার্ড", field: "ward" },
        { label: "গ্রাম", field: "village" },
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
        holding: "",
        collection_year: "",
      },
      table_data: {
        currentPage: 1,
      },
    };
  },
  computed: {
    getYears() {
      const years = [];
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      for (let i = currentYear - 10; i <= currentYear + 2; i++) {
        years.push(`${i}-${i + 1}`);
      }
      return years;
    },
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
    getDataList() {
      return [...this.$store.getters["house/getData"]];
    },
    getSortedList() {
      let temp_data = this.getDataList;
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
        temp_data.sort((a, b) => {
          // Convert Bangla numbers to regular numbers for comparison
          const banglaToNumeric = (str) =>
            parseInt(
              str.replace(
                /[০-৯]/g,
                (match) => match.charCodeAt(0) - "০".charCodeAt(0)
              )
            );

          const numericA = banglaToNumeric(a.holding);
          const numericB = banglaToNumeric(b.holding);

          return numericA - numericB;
        });
      }
      if (this.form_data.holding) {
        temp_data = temp_data.filter(({ holding }) => {
          // return this.form_data.holding == holding;
          return holding.includes(this.form_data.holding);
        });
      }
      if (this.form_data.collection_year) {
        temp_data = temp_data.filter(({ collection_year }) => {
          return this.form_data.collection_year == collection_year;
        });
      }

      return temp_data;
    },
  },
  methods: {
    changeURL() {
      const dataTableComponent = this.$refs.data_table;
      const materialPagination = dataTableComponent.$el.querySelector(
        ".material-pagination"
      );
      materialPagination.addEventListener("click", () => {
        this.$router.push({
          query: {
            ...this.$route.query,
            page: this.table_data.currentPage,
          },
        });
      });
    },
    convertToEngish(number) {
      const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      // Convert each digit of the number
      const englishDigits = number
        .toString()
        .split("")
        .map((digit) =>
          bengaliNumbers.includes(digit)
            ? englishNumbers[bengaliNumbers.indexOf(digit)]
            : digit
        );
      return englishDigits.join("");
    },
    convertToBengali(number) {
      const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      // Convert each digit of the number
      const bengaliDigits = number
        .toString()
        .split("")
        .map((digit) =>
          englishNumbers.includes(digit)
            ? bengaliNumbers[englishNumbers.indexOf(digit)]
            : digit
        );
      return bengaliDigits.join("");
    },
    async deleteData(data) {
      console.log(data);
      if (window.confirm("Are you sure ?")) {
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
          this.$axios
            .delete(`/house/${data.id}/`, {
              headers: {
                // "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              // this.getData();
              this.$store.dispatch("house/get_data");

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
    // this.getData();
    setTimeout(() => {
      this.changeURL();
      this.table_data["currentPage"] = this.$route.query["page"]
        ? this.$route.query["page"]
        : 1;
    }, 1);
  },
  watch: {
    "form_data.holding"() {
      this.form_data.holding = this.convertToBengali(this.form_data.holding);
    },
  },
  name: "Tax",
};
</script>

<style>
/* Materialize Table style */
</style>

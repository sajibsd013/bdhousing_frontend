<template>
  <section class="container pb-5 pt-3 mb-5">
    <div class="col-lg-8 col-md-10 mx-auto py-3">
      <div class="p-3 card bg-white border mb-5" v-if="$auth.loggedIn">
        <h6 class="fw-semibold">কর মূল্যয়ন খানা প্রদানের তথ্য</h6>
        <!-- {{form_data}} -->
        <hr />
        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form small" @submit.prevent="handleSubmit(submitForm)">
            <div class="row g-2">
              <div class="mb-2 col-md-6">
                <label for="name" class="small form-label"
                  >বাড়ির/ দোকান মালিকের নাম</label
                >
                <input
                  class="form-control form-control-sm"
                  id="name"
                  required
                  v-model="form_data.name"
                />
              </div>
              <div class="mb-2 col-md-6">
                <label for="father" class="small form-label">পিতার নাম</label>
                <input
                  class="form-control form-control-sm"
                  id="father"
                  required
                  v-model="form_data.father"
                />
              </div>

              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="total_male" class="small form-label"
                  >পরিবারের সদস্য (পুরুষ)</label
                >
                <input
                   
                  class="form-control form-control-sm"
                  id="total_male"
                  required
                  v-model="form_data.total_male"
                />
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="total_female" class="small form-label"
                  >পরিবারের সদস্য (মহিলা)</label
                >
                <input
                   
                  class="form-control form-control-sm"
                  id="total_female"
                  required
                  v-model="form_data.total_female"
                />
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="Division " class="small form-label">বিভাগ</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.division"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="data in getDivisions">
                    <option :value="data.bn_name" :key="data.id">
                      {{ data.bn_name }}
                    </option>
                  </template>
                </select>
              </div>

              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="districts" class="small form-label">জেলা</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.district"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="data in getDistricts">
                    <option :value="data.bn_name" :key="data.id">
                      {{ data.bn_name }}
                    </option>
                  </template>
                </select>
              </div>

              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="upazilas" class="small form-label">উপজেলা</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.upazila"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="data in getUpazilas">
                    <option :value="data.bn_name" :key="data.id">
                      {{ data.bn_name }}
                    </option>
                  </template>
                </select>
              </div>

              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="union" class="small form-label">ইউনিয়ন</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.union"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="data in getUnions">
                    <option :value="data.bn_name" :key="data.id">
                      {{ data.bn_name }}
                    </option>
                  </template>
                </select>
              </div>

              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="ওয়ার্ড" class="small form-label">ওয়ার্ড</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.ward"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="number in 9">
                    <option :value="convertToBengali(number)" :key="number">
                      {{ convertToBengali(number) }}
                    </option>
                  </template>
                </select>
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="village" class="small form-label">গ্রাম</label>
                <input
                  class="form-control form-control-sm"
                  id="village"
                  required
                  v-model="form_data.village"
                />
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="union_code" class="small form-label"
                  >ইউনিয়ন কোড</label
                >
                <input
                  class="form-control form-control-sm"
                   

                  id="union_code"
                  required
                  v-model="form_data.union_code"
                />
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="collection_year" class="small form-label"
                  >আদায় সন</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.collection_year"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="number in getYears">
                    <option :value="convertToBengali(number)" :key="number">
                      {{ convertToBengali(number) }}
                    </option>
                  </template>
                </select>
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="mobile" class="small form-label">মোবাইল নং</label>
                <input
                  class="form-control form-control-sm"
                  id="mobile"
                  required
                  v-model="form_data.mobile"
                />
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="income_source " class="small form-label"
                  >আয়ের উৎস
                </label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.income_source"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="data in work_options">
                    <option :value="data" :key="data">
                      {{ data }}
                    </option>
                  </template>
                </select>
              </div>
              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="building_nature " class="small form-label"
                  >গৃহ ভবনের প্রকৃতি</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  v-model="form_data.building_nature"
                  required
                >
                  <option value="" disabled selected>নির্বাচন করুন</option>
                  <template v-for="data in building_nature_options">
                    <option :value="data" :key="data">
                      {{ data }}
                    </option>
                  </template>
                </select>
              </div>

              <div class="mb-2 col-md-4 col-lg-3 col-6">
                <label for="hall_tax" class="small form-label"
                  >হাল ট্যাক্স</label
                >
                <input
                  class="form-control form-control-sm"
                  id="hall_tax"
                   

                  required
                  v-model="form_data.hall_tax"
                />
              </div>
            </div>
            <div class="my-3">
              <div class="d-flex align-items-center mb-2">
                <input type="checkbox" id="checkbox" name="checkbox" required />
                <label for="checkbox" class="ms-1 small"> Are you sure? </label>
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-primary btn-sm" type="submit">
                  {{ $route.query.id ? "Update" : "Submit" }}
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div v-else>
        <div class="alert alert-danger" role="alert">
          You have no permission!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "Tax",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  head() {
    return {
      title: "কর মূল্যয়ন তথ্য",
    };
  },
  data() {
    return {
      work_options: [
        "কৃষি",
        "ব্যবসা",
        "প্রবাসি",
        "দিন মজুর",
        "চাকরিজীবী",
        "অন্যান্য",
      ],
      building_nature_options: [
        "পাকা",
        "আধা পাকা ",
        "টিন শেড",
        "কাচাঁ",
        "সরকারী ভবণ",
        "1 তলা বিশিষ্ট",
        "2 তলা বিশিষ্ট",
        "3 তলা বিশিষ্ট",
        "4 তলা বিশিষ্ট",
        "5 তলা বিশিষ্ট",
      ],
      form_data: {
        name: "",
        father: "",
        total_male: "",
        total_female: "",
        income_source: "",
        building_nature: "",
        division: "",
        district: "",
        upazila: "",
        union: "",
        union_code: "",
        ward: "",
        village: "",
        hall_tax: "",
        mobile: "",
        collection_year: "",
        user: "",
      },
    };
  },
  computed: {
    getDivisions() {
      return this.$store.getters["getGeodata"]["divisions"];
    },
    getDistricts() {
      let dist_list = this.$store.getters["getGeodata"]["districts"];
      if (this.getDivisions && this.form_data.division) {
        let all_div = this.getDivisions;
        const selected_data = all_div.find(({ bn_name }) => {
          return bn_name == this.form_data.division;
        });

        if (dist_list && selected_data) {
          dist_list = dist_list.filter(({ division_id }) => {
            return selected_data["id"] == division_id;
          });
        }
        return dist_list;
      }

      return [];
    },
    getUpazilas() {
      let up_list = this.$store.getters["getGeodata"]["upazilas"];

      if (
        this.getDistricts &&
        this.form_data.district &&
        this.form_data.division
      ) {
        let all_div = this.getDistricts;
        const selected_data = all_div.find(({ bn_name }) => {
          return bn_name == this.form_data.district;
        });

        if (up_list && selected_data) {
          up_list = up_list.filter(({ district_id }) => {
            return selected_data["id"] == district_id;
          });
        }
        return up_list;
      }

      return [];
    },
    getUnions() {
      let un_list = this.$store.getters["getGeodata"]["unions"];

      if (
        this.getUpazilas &&
        this.form_data.upazila &&
        this.form_data.district &&
        this.form_data.division
      ) {
        let all_div = this.getUpazilas;
        const selected_data = all_div.find(({ bn_name }) => {
          return bn_name == this.form_data.upazila;
        });

        if (un_list && selected_data) {
          un_list = un_list.filter(({ upazilla_id }) => {
            return selected_data["id"] == upazilla_id;
          });
        }
        return un_list;
      }

      return [];
    },
    getUserID() {
      if (this.$auth.user.id) {
        return this.$auth.user.id;
      }
      return "";
    },
    getYears() {
      const years = [];
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      for (let i = currentYear - 4; i <= currentYear + 7; i++) {
        years.push(`${i}-${i+1}`);
      }
      return years;
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
    submitForm() {
      if (this.$route.query["id"]) {
        this.updateData();
      } else {
        this.addData();
      }
    },
    async addData() {
      this.form_data.user = this.getUserID;
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`/tax/`, this.form_data, {
            headers: {
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success! ");
              // this.$router.push("/success?q=tax");
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();
            this.$toast.error(error.message || error.response.data.message);

            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
    async updateData() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .put(`/tax/${this.$route.query.id}/`, this.form_data, {
            headers: {
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            this.$toast.success("Success!");
            // this.$router.push("/success?q=house");
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();
            this.$toast.error(error.message || error.response.data.message);

            console.log(error.response);
          });
      });

      return;
    },
    async getData() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .get(`/tax/${this.$route.query.id}`, {
            headers: {
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            this.form_data = res.data;
            this.$nuxt.$loading.finish();
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
    if (this.$route.query["id"]) {
      this.getData();
    }
  },
  beforeCreate() {
    // if (!this.$auth.$state.loggedIn) {
    //   this.$router.push("/");
    // }
  },
};
</script>

<style scoped></style>

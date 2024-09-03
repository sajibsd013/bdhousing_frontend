<template>
  <div class="mx-auto py-3">
    <div class="p-3 card bg-white border">
      <h6 class="mb fw-semibold">ট্যাক্স যাচাই</h6>
      <hr />
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="form small" @submit.prevent="handleSubmit(checkTax)">
          <div class="row g-2">
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

            <!-- <div class="mb-2 col-md-4 col-lg-3 col-6">
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
            </div> -->

            <div class="mb-2 col-md-4 col-lg-3 col-6">
              <label for="holding" class="small form-label"
                >হোল্ডিং নম্বর</label
              >
              <input
                class="form-control form-control-sm"
                id="holding"
                required
                v-model="form_data.holding"
              />
            </div>
          </div>

          <div class="my-3">
            <div class="d-grid gap-2">
              <button class="btn btn-primary btn-sm" type="submit">
                Check
              </button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <hr />
    <div class="result my-2" v-if="result.status">
      <div v-if="result.status == 200">
        <div class="alert alert-success text-center" role="alert">
          ট্যাক্স যাচাই করার জন্য আপনাকে ধন্যবাদ
        </div>
        <PDF :result="result" />
        <div class="d-flex justify-content-center">
          <a
            target="_blank"
            :href="newurl"
            class="btn btn-outline-dark btn-sm my-2 me-1"
          >
            Download <i class="icofont-download"></i>
          </a>
        </div>
      </div>
      <div class="alert alert-danger text-center" role="alert" v-else>
        দুঃখিত! আপনার তথ্য পাওয়া যায় নি
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "checktax",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: {
    newurl() {
      const result = JSON.stringify(this.result);
      // Construct the new URL with the query string
      const newUrl = `preview/?result=${result}`;
      // Redirect to the new URL
      return newUrl;
    },
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
    getYears() {
      const years = [];
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      for (let i = currentYear - 4; i <= currentYear + 7; i++) {
        years.push(`${i}-${i + 1}`);
      }
      return years;
    },
    getUserID() {
      if (this.$auth.user.id) {
        return this.$auth.user.id;
      }
      return "";
    },
  },
  data() {
    return {
      form_data: {
        division: "",
        district: "",
        upazila: "",
        union: "",
        ward: "",
        holding: "",
        collection_year: "",
      },
      result: {
        status: null,
        data: null,
      },
    };
  },
  methods: {
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
    async checkTax() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`/check-tax/`, this.form_data, {
            headers: {
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            this.result.status = res.status;
            if (res.status === 200) {
              console.log(res.data);
              this.result.data = res.data[0];

              this.$toast.success("Success!");
              // this.$router.push("/success?q=house");
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
  },
  mounted() {},

  watch: {
    "form_data.holding"() {
      this.form_data.holding = this.convertToBengali(this.form_data.holding);
    },
  },
};
</script>
<style scoped></style>

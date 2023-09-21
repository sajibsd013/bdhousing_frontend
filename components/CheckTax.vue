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
                <option value="" disabled selected>select one</option>
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
                <option value="" disabled selected>select one</option>
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
                <option value="" disabled selected>select one</option>
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
                <option value="" disabled selected>select one</option>
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
                <option value="" disabled selected>select one</option>
                <template v-for="number in 9">
                  <option :value="number" :key="number">
                    {{ number }}
                  </option>
                </template>
              </select>
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
                <option value="" disabled selected>select one</option>
                <template v-for="number in getYears">
                  <option :value="number" :key="number">
                    {{ number }}
                  </option>
                </template>
              </select>
            </div>

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
      <hr />
      <div class="result" v-if="result">
        <div
          class="alert alert-success text-center"
          role="alert"
          v-if="result == 200"
        >
          অভিনন্দন! ইতিমধ্যে কর আপনার প্রদান করা হয়েছে
        </div>
        <div class="alert alert-danger text-center" role="alert" v-else>
          দুঃখিত! আপনার তথ্য পাওয়া যায় নি
        </div>
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
      for (let i = currentYear - 2; i <= currentYear + 3; i++) {
        years.push(i);
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
      result: null,
    };
  },
  methods: {
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
            this.result = res.status;
            if (res.status === 200) {
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
};
</script>
<style scoped></style>

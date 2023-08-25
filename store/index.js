export const state = () => ({
  country_code: [],
  accept: false,
  doctor_info: {
    name: "Dr. Xyz",
    qualifications: "MBBS,FCPS,(Medicine)",
    specialist: "Medicine Specialist",
    experience:
      "Medical Officer \nSylhet MAG Osmani Medical College & Hospital.",
    chamber: "Comfort Medical Services, Kajalshah, Sylhet.",
    chamber_time:
      "প্রতিদিন- বিকাল ৩টা থেকে রাত ৮টা \nশনি থেকে বৃহস্পতিবার (শুক্রবার বন্ধ)",
  },
});

export const getters = {
  CountryCode(state) {
    return state.country_code;
  },
  isAccept(state) {
    return state.accept;
  },
  getDoctor(state) {
    return state.doctor_info;
  },
};

export const mutations = {
  setCountryCodes(state, country_code) {
    state.country_code = country_code;
  },
  setAccept(state, accept) {
    state.accept = accept;
  },
  setDoctor(state, doctor_info) {
    state.doctor_info = doctor_info;
  },
};

export const actions = {
  async getCountryCodes({ commit }) {
    console.log("Calling....");
    await this.$axios
      .get(`prescription/data/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          commit("setCountryCode", res.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message || error.message);
        // context.commit('error', error)
      });
  },
};

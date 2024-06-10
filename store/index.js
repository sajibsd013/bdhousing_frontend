export const state = () => ({
  geodata: [],
});

export const getters = {
  getGeodata(state) {
    return state.geodata;
  },
};

export const mutations = {
  setGeodata(state, data) {
    state.geodata = data;
  },
};

export const actions = {
  async get_data({ commit }) {
    const API_URL = window.location.origin + "/data/data.json";
    console.log(API_URL);

    await this.$axios
      .get(API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          commit("setGeodata", res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

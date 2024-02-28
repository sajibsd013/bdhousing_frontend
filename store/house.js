export const state = () => ({
  data: [],
});

export const getters = {
  getData(state) {
    return state.data;
  },
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
};

export const actions = {
  async get_data({ commit }) {

    await this.$axios
    .get(`house`)
    .then((res) => {
      if (res.status === 200) {
        this.data = res.data;
        commit("setData", res.data);
      }
    })
    .catch((error) => {
      console.log(error.response);
      console.log(error.response.data.message || error.message);
      // context.commit('error', error)
    });
  },
};

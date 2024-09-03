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
  async get_data({ commit, state }) {
    // Check if data is already populated
    if (state.data.length > 0) {
      return; // Exit early if data is not empty
    }

    try {
      const res = await this.$axios.get("house");
      console.log(res);

      if (res.status === 200) {
        commit("setData", res.data);
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.response.data.message || error.message);
      // Handle the error appropriately, e.g., commit an error mutation
    }
  },
};

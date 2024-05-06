import { userLogin, userSignup } from "../../services/TodoApi";

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      username: "",
      userId: "",
    };
  },
  getters: {
    GET_USER_TOKEN_GETTER(state) {
      return state.token;
    },
    GET_USER_ID_GETTER(state) {
      return state.userId;
    },
    GET_USER_NAME_GETTER(state) {
      return state.username;
    },
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      state.username = payload.username;
      state.token = payload.token;
      state.userId = payload.userId;
    },

    CLEAR_USER_DATA(state) {
      state.username = null;
      state.token = null;
      state.userId = null;
    },
  },
  actions: {
    async SIGNUP_USER(context, payload) {
      try {
        const response = await userSignup(payload);
        //   let response = {
        //     username: "lksdjl",
        //     token: "lksdjl",
        //     userId: "lksdjl",
        //   };

        if (response) {
          context.commit("SET_USER_DATA", {
            username: response?.data?.data?.username,
            token: response?.data?.data?.token,
            userId: response?.data?.data?.id,
          });

          return true;
        }
      } catch (error) {
        console.log("Something went wrong [SIGNUP_USER_STORE_ACTION]");
      }
    },

    async LOGIN_USER(context, payload) {
      try {
        const response = await userLogin(payload);

        if (response) {
          context.commit("SET_USER_DATA", {
            username: response?.data?.data?.username,
            token: response?.data?.data?.token,
            userId: response?.data?.data?.id,
          });

          return true;
        }
      } catch (error) {
        console.log("Something went wrong [LOGIN_USER_STORE_ACTION]");
      }
    },

    LOGOUT_USER(context) {
      context.commit("CLEAR_USER_DATA");
    },
  },
};

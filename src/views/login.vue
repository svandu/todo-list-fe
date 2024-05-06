<script>
import { mapActions } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", {
      login: "LOGIN_USER",
    }),
    async onLogin() {
      const response = await this.login({
        username: this.username,
        password: this.password,
      });

      if (response) {
        this.$router.replace("/");
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="onLogin">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <router-link to="/auth/signup" class="signup-link">
      <span>Don't have account </span>
      <span>Sign up</span>
    </router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}

.login-container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
}

h2 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}

button {
  background-color: #09bc8a;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}

button:hover {
  background-color: #08af80;
}

.signup-link {
  margin-top: 1rem;
  color: #07ca93;
  text-decoration: none;
}
.signup-link span:first-child {
  color: #fff;
}
</style>

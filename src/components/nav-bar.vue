<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", {
      token: "GET_USER_TOKEN_GETTER",
      username: "GET_USER_NAME_GETTER",
    }),
  },
  methods: {
    ...mapActions("auth", {
      logout: "LOGOUT_USER",
    }),
    onLogout() {
      this.logout();
      this.$router.replace("/auth/login");
    },
  },
};
</script>

<template>
  <div class="navbar">
    <h2>TodoApp</h2>
    <div class="profile" v-if="token">
      <div class="profile-user">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="profile-image"
        />
        <p>{{ username }}</p>
      </div>
      <p class="logout" @click="onLogout">Log out</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #09bc8a;
}

.navbar {
  margin-top: 1rem;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f0f0;
  border-radius: 50px;
  padding: 0px 20px;
}

.profile {
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.profile-image {
  padding: 0.1rem;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}

.profile-user {
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.logout {
  color: rgb(201, 43, 43);
  cursor: pointer;
}
</style>

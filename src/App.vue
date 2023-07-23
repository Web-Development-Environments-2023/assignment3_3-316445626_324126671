<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'main' }">Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>|
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link :to="{ name: 'login' }">Login</router-link>|
        <router-link :to="{ name: 'register' }">Register</router-link>|
      </span>
      <span v-else>
        {{ $root.store.username }}: <button @click="Logout">Logout</button>|
        <div class="dropdown">
          <button class="dropbtn">Personal</button>
          <div class="dropdown-content">
            <router-link :to="{ name: 'favorites' }">Favorites</router-link>
            <router-link :to="{ name: 'myrecipes' }">Private</router-link>
            <router-link :to="{ name: 'la-familia' }">La Familia</router-link>
          </div>
        </div>
        <div>
        <b-button @click="toggleModal">New Recipe</b-button>
        <b-modal v-if="showModal" v-model="showModal" >
          <createRecipeModal @formSubmitted="closeModal"></createRecipeModal>
        </b-modal>
      </div>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    toggleModal() {
      {{"hi"}};
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    },
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgba(22, 84, 146, 0.451);
  min-height: 100vh;
}


.nav {
  padding: 20px;
  margin: auto;
  width: 50%;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown {
  display: inline-block;
}

.dropbtn {
  background-color: transparent;
  color: #2c3e50;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  border: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #2c3e50;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>

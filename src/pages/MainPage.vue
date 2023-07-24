<template>
  <div class="container">
    <h1 class="title">Main Page</h1>

    <!-- Wrap the blurred content and the "Login" button in a flex container -->
    <div class="content-container">
      <div class="blurred-content">
        <div class="recipe-list-container">
          <RecipePreviewList title="Explore these Recipes" class="RandomRecipes center" path="recipes/random" />
          <RecipePreviewList
            title="Last Viewed Recipes"
            path="users/lastWatched"
            :class="{
              RandomRecipes: true,
              blur: !$root.store.username,
              center: true
            }"
            disabled
          />
        </div>
      </div>
      <LoginPage v-if="!$root.store.username"></LoginPage>
      <!-- <router-link v-if="!$root.store.username" to="/login" tag="button" class="login-button">You need to Login to view this</router-link> -->
    </div>

    <!-- Add other elements below if needed -->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "./LoginPage.vue";
export default {
  components: {
    RecipePreviewList,
    LoginPage
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

.content-container {
  display: flex;
}

.blurred-content {
  flex-grow: 1; /* Allow the blurred content to take up remaining available space */
  padding: 10px; /* Add padding for spacing */
}

/* Add this style to display RecipePreviewList components vertically and next to each other */
.recipe-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Adjust the width of each RecipePreviewList component if needed */
.RandomRecipes {
  width: 45%; /* Adjust the width to your preference */
  margin-bottom: 20px; /* Add some spacing between the components */
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

.login-button {
  margin: auto; /* Add some spacing between the blurred content and the "Login" button */
  width: 50%;

}
</style>

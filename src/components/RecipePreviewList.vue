<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row v-if="recipes.length > 0">
      <b-col v-for="r in recipes" :key="r.id" style="flex-basis: 0;flex-grow: 0;max-width: 100%;padding: 40px;">
        <RecipePreview class="recipePreview" :recipe="r.recipe" :id="r.id" />
      </b-col>
    </b-row>
    <div v-else>No recipes found</div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String
    },
    sort: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "https://awaisy-pich.cs.bgu.ac.il/" + this.path,
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        const recipes = response.data.recipes;
        if (this.sort === "By time"){
          recipes.sort((a, b) => a.time - b.time);
        }
        else{
          recipes.sort((a, b) => a.popularity - b.popularity);
        }
        this.recipes = [];
        this.recipes.push(...recipes);
        console.log(this.recipes)

        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  },
  watch: {
    path() {
      // Call the updateRecipes function whenever the 'path' prop changes
      this.updateRecipes();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

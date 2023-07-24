<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row v-if="recipes.length > 0">
      <b-col v-for="r in recipes" :key="r.id || r.recipeId" style="flex-basis: 0;flex-grow: 0;max-width: 100%;padding: 40px;">
        <RecipePreview class="recipePreview" :recipe="r.recipe || r" :id="r.id || r.recipeId" />
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

        let recipes = response.data;
        if (Array.isArray(response.data)) {
          // The response data directly contains the recipes array
          recipes = response.data;
        } if (response.data.recipes && Array.isArray(response.data.recipes)) {
          // The recipes array is nested under 'recipes' property
          recipes = response.data.recipes;
        }
        console.log("Recipes:", recipes);
        if (this.sort === "By time"){
          recipes.sort((a, b) => a.time < b.time ? -1 : 1);
        }
        else{
          recipes.sort((a, b) => a.popularity < b.popularity ? -1 : 1);
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
    sort(){
      this.updateRecipes();
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

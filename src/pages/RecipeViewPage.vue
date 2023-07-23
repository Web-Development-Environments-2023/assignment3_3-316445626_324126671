<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.name }}</h1>
        <img :src="recipe.mainImage" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Likes: {{ recipe.popularity }} likes</div>
              <div>Ready in {{ recipe.time }} minutes.</div>
              <div>Portions for {{ recipe.numOfPortions }} people.</div>
              <div v-html="recipe.summary" class="summary"></div>
            </div>
            <div class="ingr">
              Ingredients:
              <ul>
                <li
                  v-for="(r, index) in recipe.ingredients"
                  :key="index + '_' + r.id"
                >
                  {{ r.original }}
                </li>
              </ul>
            </div>
            <div class="inst">
              Instructions:
              <ol>
                <li v-for="s in recipe._instructions" :key="s.number">
                  {{ s.step }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      response = this.$route.params.response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          "https://awaisy-pich.cs.bgu.ac.il/recipes/recipe",
          {
            params: { id: this.$route.params.recipeId }
          }
        );
        
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        name,
        time,
        mainImage,
        popularity,
        vegan,
        vegetarian,
        glutenFree,
        summary,
        ingredients,
        instructions,
        numOfPortions
      } = response.data.recipe;
      let _instructions = instructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        name,
        time,
        mainImage,
        popularity,
        vegan,
        vegetarian,
        glutenFree,
        summary,
        ingredients,
        _instructions,
        numOfPortions
      };
      this.recipe = _recipe;
      if (this.$root.store.username){

        try {
          await this.axios.post(
            // "https://test-for-3-2.herokuapp.com/recipes/info",
            "https://awaisy-pich.cs.bgu.ac.il/users/addWatched", { recipeId: this.$route.params.recipeId }
          );
        } catch (error) {
          console.log("error.response.status", error.response.status);
        }
      }
    } catch (error) {
      console.log(error);
    }

  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  padding: 5px;
  flex-wrap: wrap;
  justify-content: center;
}
.wrapped {
  width: 75%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding: 5px;
  background-color: rgba(20, 18, 15, 0.827);
}
.recipe-header{
  font-family: Verdana, Tahoma, sans-serif;
  color: white;
  text-align: center;
}
.wrapped{
  font-family: cursive;
  color: white;
}
.mb-3{
  margin-left: auto;
  margin-right: auto;
}
.ingr {
  display: block;
  margin-left: -10px;
}

.ingr li {
  display: block;
  position: relative;
}

.ingr li:not(:last-child) {
  margin-bottom: 16px;
}

.ingr li:before {
  content: "";
  position: absolute;
  top: 1.2em;
  left: -30px;
  margin-top: -.9em;
  background: white;
  height: 12px;
  width: 12px;
  border-radius: 50%;
}

.container{
  background-color: rgba(228, 140, 40, 0.786);
  border-radius: 25px;
}

.summary >>> a {
    color: rgba(93, 47, 179, 0.767);
}

</style>

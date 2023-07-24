<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: id } }"
    class="recipe-preview" style="text-decoration: none;color: #050505;"
  >
    <!-- <div class="recipe-body">
      <img v-if="image_load" :src="recipe.mainImage" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.name" class="recipe-title">
        {{ recipe.name }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.time }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>
      </ul>
    </div> -->
      <div class="card">
        <div class="card_image">
          <img :src="recipeImageUrl"/>
          <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">
          <label :for="checkboxId" class="custom-checkbox">
            <input type="checkbox" :id="checkboxId"/>
            <i ref="starIcon" class="glyphicon glyphicon-star-empty" @click.prevent="markFavorite"></i>
          </label>
        </div>
        <div class="card_content">
          <h2 class="card_title">{{recipe.name}}</h2>
          <div class="card_text">
            <ul class="recipe-overview">
              <img src="../assets/timer.png" style="width: 35px;">
              {{ recipe.time }} minutes
              <img src="https://static.vecteezy.com/system/resources/previews/000/422/468/original/like-icon-vector-illustration.jpg" style="width: 35px">
              {{ recipe.popularity }}
            </ul>
            <ul v-if="recipe.glutenFree">The recipe is gluten free</ul>
            <ul v-if="recipe.vegetarian">The recipe is for vegetarians</ul>
            <ul v-if="recipe.vegan">The recipe is for vegans</ul>
            <hr />
            <div v-html="recipe.summary"></div>
          </div>
        </div>
      </div>
  </router-link>
</template>

<script>
export default {
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  data() {
    return {
      image_load: true,
      checkboxId: 'unique-checkbox-id-' + Math.random().toString(36).substr(2, 9), // Generate a unique checkbox id
    };
  },
  computed: {
    recipeImageUrl() {
      try {
        // Check if 'mainImage' is available and use it as the image URL
        if (this.recipe && this.recipe.mainImage) {
          return this.recipe.mainImage;
        }
      } catch (error) {
        return "../assets/" + this.recipe.image;
      }
      // Otherwise, use the 'image' property as the image URL
      return "../assets/" + this.recipe.image;
    }
  },
  methods: {
    async markFavorite() {
      try {
        const starIconElement = this.$refs.starIcon;
        if (starIconElement.classList.contains('glyphicon-star-empty')) {
          starIconElement.classList.remove('glyphicon-star-empty');
          starIconElement.classList.add('glyphicon-star');
          const response = await this.axios.post(
            "https://awaisy-pich.cs.bgu.ac.il/users/favorites",
            {
              recipeId: this.id,
            }
          );
        } else {
          starIconElement.classList.remove('glyphicon-star');
          starIconElement.classList.add('glyphicon-star-empty');
          const response = await this.axios.delete(
            "https://awaisy-pich.cs.bgu.ac.il/users/favorites",
            {
              recipeId: this.id,
            }
          );
        }
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    }

  },
  props: {
    recipe: {
      type: Object,
      required: true
    },

    id: {
      type: Number,
      required: true
    }
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  }
};
</script>

<style scoped>
/* .recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  position: relative;
  max-height: 250px;
}

.recipe-preview .recipe-body .recipe-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  position: relative;
  margin: 0 0 24px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
} */

*,
*::before,
*::after {
  box-sizing: border-box;
}

.card_image {
  position: relative;
  max-height: 250px;
}

.card_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card_price {
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 0.25rem;
  background-color: #c89b3f;
  font-size: 18px;
  font-weight: 700;
}

.card_price span {
  font-size: 12px;
  margin-top: -2px;
}

.note {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 0.25rem;
  background-color: #c89b3f;
  font-size: 14px;
  font-weight: 700;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
}

.card_content {
  position: relative;
  padding: 16px 12px 32px 24px;
  margin: 16px 8px 8px 0;
  max-height: 290px;
  overflow-y: scroll;
}

.card_content::-webkit-scrollbar {
  width: 8px;
}

.card_content::-webkit-scrollbar-track {
  box-shadow: 0;
  border-radius: 0;
}

.card_content::-webkit-scrollbar-thumb {
  background: #c89b3f;
  border-radius: 15px;
}

.card_title {
  position: relative;
  margin: 0 0 24px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}

.card_title::after {
  position: absolute;
  display: block;
  width: 50px;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #c89b3f;
  content: "";
}

hr {
  margin: 24px auto;
  width: 50px;
  border-top: 2px solid #c89b3f;
}

.card_text p {
  margin: 0 0 24px;
  font-size: 14px;
  line-height: 1.5;
}

.card_text p:last-child {
  margin: 0;
}

.favoriting{
    display: inline-block
}
.favorite__heart {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 16px;
    color: #ABABAB;
    cursor: pointer;
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out;
}
.favorite__heart.is-disabled:hover {
     cursor: default;
 }
.favorite__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}
.favorite__heart__selected{
    color: #df470b;
}

label {
  /* Presentation */
  font-size: 48px
}

/* Required Styling */

label input[type="checkbox"] {
  display: none;
}

.custom-checkbox {
  margin-left: 2em;
  position: relative;
  cursor: pointer;
  width: 30px;
  position:absolute;
  right: -40px;
  top: -18px;
}

.custom-checkbox .glyphicon {
  color: gold;
  position: absolute;
  top: 0.4em;
  left: -1.25em;
  font-size: 0.75em;
}

.custom-checkbox .glyphicon-star-empty {
  color: gray;
}

.custom-checkbox .glyphicon-star {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.custom-checkbox:hover .glyphicon-star{
  opacity: 0.5;
}

.custom-checkbox input[type="checkbox"]:checked ~ .glyphicon-star {
  opacity: 1;
}

</style>

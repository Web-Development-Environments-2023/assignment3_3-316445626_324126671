<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <form method="dialog">
    <label class="center">
      <b-row>
      <b-col>
        <input type="text" v-model="input" class="form-control" placeholder="Search...">
      </b-col>
      <b-col>
        <select v-model="selectedCuisine" class="form-control">
          <option v-for="item in cuisinesOptions" :key="item" :value="item">{{ item }}</option>
        </select>
      </b-col>
      <b-col>
        <select v-model="selectedDiet" class="form-control">
          <option v-for="item in dietOptions" :key="item" :value="item">{{ item }}</option>
        </select>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <select v-model="selectedIntolerances" class="form-control">
          <option v-for="item in intolerancesOtions" :key="item" :value="item">{{ item }}</option>
        </select>
      </b-col>
      <b-col>
        <select v-model="limit" class="form-control">
          <option v-for="item in limitOptions" :key="item" :value="item">{{ item }}</option>
        </select>
      </b-col>
      <b-col>
        <select v-model="sort" class="form-control">
          <option v-for="item in sortOptions" :key="item" :value="item">{{ item }}</option>
        </select>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-button @click="onSearch" class="form-control">Search</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
    </label>
    </form>
    <RecipePreviewList v-if="show" title="Results" :path="uri" :sort="sort" class="recipes"/>
  </div>
</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList.vue'; 
import {cuisinesOptions, dietOptions, intolerancesOtions} from '../assets/search-filter.js'
export default {
  components:{
    RecipePreviewList
  },
  data(){
    return {
      show: false,
      input: '',
      selectedCuisine: '',
      cuisinesOptions: cuisinesOptions,
      selectedDiet: '',
      dietOptions: dietOptions,
      selectedIntolerances: '',
      intolerancesOtions: intolerancesOtions,
      limit: '5',
      limitOptions: [5, 10, 15],
      uri: '',
      sortOptions: ['By popularity', 'By time'],
      sort: ''
    }
  },
  methods: {
    onSearch(){
      if (this.input){
        this.show = true;
      }
      const params = {
        key: this.input,
        limit: this.limit,
        cuisine: this.selectedCuisine,
        diet: this.selectedDiet,
        intolerances: this.selectedIntolerances
      }
      const queryString = Object.keys(params)
      .filter(key => params[key] !== "")
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join("&");
      this.uri = `recipes/search?${queryString}`;
    }
  }
}
</script>

<style scoped>
.center{
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.row {
  margin-bottom: 10px; /* Adjust the spacing between rows as needed */
}

.col {
  padding: 10px; /* Adjust the cell padding as needed */
}

.form-control {
  width: 100%;
}
</style>

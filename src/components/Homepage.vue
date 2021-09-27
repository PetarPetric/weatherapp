<template>
  <div class="weather-wrapper">
    <div class="weather__header">
      <p>Simple Weather</p>
      <input type="text" v-model="searchBar" />
    </div>
    <div class="weather__body">
      <div class="weather__body__selector">
        <a
          @click="getWeather(city.lat, city.lon, city.city_id)"
          :class="{ active: id == city.city_id }"
          v-for="city in favoriteCities"
          :key="city.id"
          >{{ city.city_name }}</a
        >
      </div>
      <single-place-forecast />
    </div>
    <div class="weather__footer">date etc</div>
  </div>
</template>

<script>
import SinglePlaceForecast from "./SinglePlace.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SinglePlaceForecast,
  },
  data() {
    return {
      searchBar: "",
      id: "",
    };
  },
  methods: {
    getWeather(arg, arg1, arg2) {
      const place = {
        lat: arg,
        lon: arg1,
      };
      this.id = arg2;
      console.log(place);
      this.$store.dispatch("getWeather", place);
    },
  },
  created() {
    this.getWeather(
      this.favoriteCities[0].lat,
      this.favoriteCities[0].lon,
      this.favoriteCities[0].city_id
    );
  },
  computed: {
    ...mapGetters({
      cityList: "cityList",
    }),
    favoriteCities() {
      return this.cityList.filter((city) => {
        return (
          city.city_name == "Beijing" ||
          city.city_name == "Los Angeles" ||
          city.city_name == "Rio de Janeiro" ||
          city.city_name.toLowerCase() == this.searchBar.toLowerCase()
        );
      });
    },
  },
};
</script>

<style>
</style>
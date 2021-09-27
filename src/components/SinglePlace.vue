<template>
  <div class="weather__body__forecast">
    <div class="weather__body__forecast__next-hours">
      <div class="forecast-header">Next hours</div>
      <div v-if="currentPlaceForecast" class="table">
        <div
          v-for="hour in currentPlaceForecast.hourly"
          :key="hour.dt"
          class="table__single-time"
        >
          <p>{{ Math.ceil(hour.temp) }}°</p>
          <img
            :src="require(`@/assets/${hour.weather[0].icon}@2x.png`)"
            width="20"
            height="20"
            alt=""
          />
          <p>{{ new Date(hour.dt * 1000) | hourlyFilter }}</p>
        </div>
      </div>
    </div>
    <div class="weather__body__forecast__next-days">
      <div class="forecast-header">Next 5 days</div>
      <div v-if="currentPlaceForecast" class="table">
        <div
          v-for="day in currentPlaceForecast.daily"
          :key="day.dt"
          class="table__single-time"
        >
          <img
            :src="require(`@/assets/${day.weather[0].icon}@2x.png`)"
            width="30"
            height="30"
            alt=""
          />
          <p>{{ new Date(day.dt * 1000) | dailyFilter }}</p>
          <div>
            <p>{{ Math.ceil(day.temp.max) }}°</p>
            <p>{{ Math.ceil(day.temp.min) }}°</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentPlaceForecast"]),
  },
  created() {
    console.log(this.currentPlaceForecast);
  },
  filters: {
    hourlyFilter: function (date) {
      return moment(date).format("h:mm A");
    },
    dailyFilter: function (date) {
      return moment(date).format("dddd, MMM DD");
    },
  },
};
</script>

<style>
</style>
import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import json from "../json/cities_20000.json";

const apiKey = "72536d6fbc936bb4852877a048c81a3e";
const dataApiUrl = "https://api.openweathermap.org/data/2.5/onecall";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cities: json,
        currentPlace: null,
    },
    mutations: {
        SET_CURRENT_PLACE(state, payload) {
            state.currentPlace = payload;
        }
    },
    actions: {
        getWeather({ commit }, arg) {
            axios.get(dataApiUrl, {
                params: {
                    units: "metric",
                    appId: apiKey,
                    exclude: "minutely, alerts",
                    ...arg
                }
            })
                .then(response => {
                    const { data } = response;
                    commit("SET_CURRENT_PLACE", data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    getters: {
        cityList: state => state.cities,
        currentPlaceForecast: state => state.currentPlace,
    }
})

export default store
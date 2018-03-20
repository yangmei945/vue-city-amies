<template>
  <div id="app">
    <button class="amiesBtn" @click="showpicker">点击显示城市选择器</button>
    <vue-city-amies :show="showCityPicker" @confirmCity="showCity" @close="closePicker"></vue-city-amies>
    <div class="amiesTxt">您选择的城市是： {{city}}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      city: "",
      showCityPicker: false
    }
  },
  methods: {
    showpicker(){
      this.showCityPicker = true;
    },
    showCity(city){
      this.city = city;
      this.showCityPicker = false;
    },
    closePicker(){
      this.showCityPicker = false;
    }
  }
}
</script>

<style lang="scss">
.amiesBtn{
  width: 40rem;
  height: 10rem;
  font-size: 4rem;
}
.amiesTxt{
  font-size: 4rem;
  margin-top: 3rem;
}
</style>

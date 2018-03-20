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
  width: 400px;
  height: 100px;
  font-size: 40px;
}
.amiesTxt{
  font-size: 40px;
  margin-top: 30px;
}
</style>

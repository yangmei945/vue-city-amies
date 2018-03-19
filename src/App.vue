<template>
  <div id="app">
    <button class="btn" @click="showpicker">点击显示城市选择器</button>
    <vue-city-amies :show="showCityPicker" @confirmCity="showCity" @close="closePicker"></vue-city-amies>
    <div class="txt">您选择的城市是： {{city}}</div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.btn{
  width: 400px;
  height: 100px;
  font-size: 40px;
}
.txt{
  font-size: 40px;
  margin-top: 30px;
}
</style>

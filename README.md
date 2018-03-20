# vue-city-amies

>一个基于Vue 2.0 的中国城市选择器插件

## 使用方法

1. npm install vue-city-amies
2. main.js添加如下代码：
```
	import vueCityAmies from "vue-city-amies"
	Vue.use(vueCityAmies)
```
3. 在Vue模块中使用
```
	<vue-city-amies :show="showStatus" @confirmCity="confirmFunc" @close="closeFunc"></vue-city-amies>
```
|属性/方法|说明|
|:---|:---|
|:show|属性，控制选择器的显示（值为true）与隐藏（值为false）|
|@confirmCity|方法，绑定选择城市后的处理函数，注意需要在该处理函数中调用@close绑定的关闭函数，使选择城市后自动关闭选择器|
|@close|方法，绑定关闭选择器的函数|
4. 使用效果如下：
![][avatar]
[avatar]: https://github.com/yangmei945/vue-city-amies/blob/master/src/assets/example.png

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

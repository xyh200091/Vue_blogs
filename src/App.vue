<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <live2d
      :style="style"
      :model="['bilibili-live/33', 'closet-default-v2&newyear-upper&cba-super-lower&tomo-high-hat']"
      :direction="direction"
      :size="size"
    ></live2d>
  </div>
</template>

<script>
import live2d from './index.vue'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios;
Vue.use(VueAxios,axios);

export default {
  name: 'App',
  components:{
    live2d
  },
  data () {
    return {
      direction: 'left',
      style: "position: fixed; bottom: 0; left: 0; zIndex: 1",
      width: 300,
      height: 300,
      size: 230,
      tips: {
        mouseover: [{
          selector: '.vue-live2d',
          texts: ['这样可以修改默认语句']
        }]
      }
    }
  },
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}


/* 设置全局滚动条 */
::-webkit-scrollbar {
  height: 100%;
  width: 5px;
  background-color: rgb(255, 255, 255);
}

::-webkit-scrollbar-thumb {
  background-color: #6fd0ee;
  border-radius: 5px;
  
}
</style>

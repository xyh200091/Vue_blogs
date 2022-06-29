<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <live2d :style="style"
      :model="['bilibili-live/33', 'closet-default-v2&newyear-upper&cba-super-lower&tomo-high-hat']"
      :direction="direction" :size="size" />
    <component :is="mouse_effects" />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import live2d from './index.vue'//动画小人
import bubble from '@/components/Effects/Mouse/bubble.vue'//泡泡
import fireworks from '@/components/Effects/Mouse/fireworks.vue'//小烟花
import popup_fireworks from '@/components/Effects/Mouse/popup_fireworks.vue'//大烟花
import popup_live from '@/components/Effects/Mouse/popup_live.vue'//爱心
import popup_text from '@/components/Effects/Mouse/popup_text.vue'//文字

Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);

export default {
  name: 'App',
  components: {
    // 小人物动画
    live2d,
    // 鼠标特效
    bubble,
    fireworks,
    popup_fireworks,
    popup_live,
    popup_text,
  },
  data() {
    return {
      direction: 'left',
      style: "position: fixed; bottom: 0; left: 0; zIndex: 1",
      size: 230,
      tips: {
        mouseover: [{
          selector: '.vue-live2d',
          texts: ['这样可以修改默认语句']
        }]
      },
      mouse_effects_list: [
        'bubble',
        'fireworks',
        'popup_fireworks',
        'popup_live',
        'popup_text',
      ],
      mouse_effects: '',
    }
  },
  methods: {
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    },
    RandomMouseEffects() {
      this.mouse_effects = this.mouse_effects_list[this.randomNum(0, this.mouse_effects_list.length - 1)]
    },
    OrderMouseEffects() {
      var k = 0;
      var mouse = '';
      for (mouse in this.mouse_effects_list) {
        if (mouse != this.mouse_effects) {
          break;
        } else {
          k++;
        }
      }

      if (this.mouse_effects_list.length < k) {
        this.mouse_effects = this.mouse_effects_list[k + 1];
      }

    },
  },
  mounted() {
    this.RandomMouseEffects()
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

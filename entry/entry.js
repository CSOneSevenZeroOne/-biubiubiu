var Vue = require("vue");

import xheader from "./components/index/header.vue";
require("./css/base.css");
new Vue({
    //容器作用域
    el: "#demo",
    //容器内容
    template: `
          <div style="height:100%; width:100%">
             <xheader></xheader>
          </div>
      `,
    //容器数据
    data: {
  
    },
    //容器的逻辑
    methods: {},
  //注册组件
    components: {
      xheader,
    }
  })
  
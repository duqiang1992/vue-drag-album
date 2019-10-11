<template>
  <div id="app">
    <Album :imageList="list"
           :styleMe="styleMe" />
    <button class="add"
            @click="addImage">add</button>
  </div>
</template>
<script>
// 局部使用
//import { Album } from '../dist/Album'
export default {
  name: "",
  //components: { Album },
  data () {
    return {
      list: [
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=32540959,2981001427&fm=11&gp=0.jpg',
          name: '1'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569735749349&di=ddf261cb53693c25133493ec01b33b23&imgtype=0&src=http%3A%2F%2Fupload.jxntv.cn%2F2016%2F0426%2F1461658368997.jpg',
          name: '2'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570347875&di=28cb2a4f9658939d10050702bc344586&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2012%2F08%2Forigin.jpg',
          name: '3'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569753156265&di=493d8fb0aaeeac8dbcdde936e53b75d2&imgtype=0&src=http%3A%2F%2Foss.essa.cn%2F42901c11-59fc-4cfe-8734-17a4c5bcbee7.jpg',
          name: '4'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570347875&di=28cb2a4f9658939d10050702bc344586&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2012%2F08%2Forigin.jpg',
          name: '5'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569753156265&di=abd100000a456b50a38dde4b4e22df15&imgtype=0&src=http%3A%2F%2Fmuchongimg.xmcimg.com%2Fdata%2Fbcs%2F2013%2F1226%2Fw451h1333361_1388047394_558.jpg',
          name: '6'
        },
      ],
      styleMe: {
        width: '500px',
        height: '500px',
        background: '#ccc'
      }
    };
  },
  // 计算属性
  computed: {},
  // 监控data
  watch: {},
  //方法集合
  methods: {
    addImage: function () {
      this.list.push({
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569735749349&di=f8a79665d4789f041d970988b16f76c7&imgtype=0&src=http%3A%2F%2Fimg3.downza.cn%2Fxueyuan%2F201908%2Fdcc0ec5c7323a3486159766429fbd076.jpg',
        name: '7'
      })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.add {
  padding: 10px 20px;
}
</style>

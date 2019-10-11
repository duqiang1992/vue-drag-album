<template>
  <div class="img-cur"
       :style="styleMe"
       id="viewImage_box">
    <div class="Occlusion"
         :style="{background: styleMe.background ? styleMe.background : '#ffffff'}"
         v-if="isShow"></div>
    <img v-view="cur"
         v-drag
         v-rotate="rotateOpation"
         ref="imgView"
         class="viewImg">
    <div class="option">
      <svg @click="cutoverImge(-1)"
           t="1569729003047"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="8423"
           width="18"
           height="18">
        <path d="M709.254038 957.195501c-15.286148 0-29.522384-5.878894-40.166815-16.564257L279.38971 550.240953c-1.425466-1.39272-2.537799-2.577708-3.449565-3.846608l-2.304486-2.905166c-11.362792-11.416004-16.945951-24.848944-16.945951-39.068807 0-14.475689 5.708002-28.010961 16.056698-38.110993l392.376529-388.216789c10.612709-10.467399 24.785499-16.236799 39.892569-16.236799 14.772448 0 28.726252 5.599532 39.287795 15.753799 10.497075 10.18599 16.538675 24.390503 16.538675 38.95215 0 14.382569-5.722328 28.009937-16.142655 38.366819L390.732587 505.098823 749.217215 864.526939c10.249435 10.30981 15.909341 23.781636 15.909341 37.994336 0 14.889105-6.05081 28.859281-16.999163 39.333844C737.70809 951.744349 723.878107 957.195501 709.254038 957.195501z"
              p-id="8424"
              fill="#13227a"></path>
      </svg>
      <svg @click="rotate(90)"
           t="1569729262880"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="10247"
           width="18"
           height="18">
        <path d="M244.501333 422.912l77.802667-290.389333c8.426667-31.424 41.066667-50.090667 72.746667-41.6l376.746666 100.949333c31.722667 8.490667 50.645333 40.96 42.24 72.405333L738.986667 544.234667c45.546667-8.832 75.477333-25.898667 81.664-48.981334 3.114667-11.626667 0.256-25.301333-9.216-40.96a23.466667 23.466667 0 0 1 8.746666-32.597333l0.149334-0.085333c11.776-6.336 26.773333-2.432 32.768 8.874666 16.064 26.666667 21.12 52.864 14.570666 77.376-12.565333 46.869333-64.853333 76.714667-142.250666 86.976L646.016 891.306667c-8.426667 31.445333-41.066667 50.090667-72.746667 41.6l-376.746666-100.949334c-31.701333-8.490667-50.645333-40.96-42.218667-72.405333l76.970667-287.232a451.797333 451.797333 0 0 1-21.056-15.061333c-63.936-48.682667-93.504-100.821333-81.024-147.370667 6.549333-24.469333 23.978667-44.608 51.093333-59.733333a24.896 24.896 0 0 1 33.28 8.896 23.466667 23.466667 0 0 1-8.746667 32.597333c-16 8.938667-25.386667 19.370667-28.458666 30.869333-6.656 24.853333 15.786667 60.8 63.829333 97.173334 1.408 1.088 2.858667 2.176 4.309333 3.242666z m34.858667 23.253333c44.8 27.050667 100.032 51.157333 160.64 69.802667l-12.672 15.744-40.661333-68.138667a23.466667 23.466667 0 0 1 8.746666-32.597333 24.896 24.896 0 0 1 33.258667 8.917333l57.365333 96.341334a23.466667 23.466667 0 0 1-8.746666 32.597333l-98.133334 54.762667c-5.610667 2.922667-12.053333 3.626667-18.154666 2.005333a24.448 24.448 0 0 1-14.933334-11.114667 23.466667 23.466667 0 0 1 8.725334-32.597333l70.698666-39.466667 2.346667 19.754667c-59.776-18.261333-114.922667-41.578667-161.344-68.053333l-31.722667 118.421333 415.061334 111.210667 33.6-125.354667c-41.429333 1.685333-88.149333-1.301333-138.517334-9.258667l-1.450666-0.384c-11.946667-3.2-19.84-14.762667-17.898667-26.666666 1.92-13.098667 14.357333-21.845333 27.733333-19.797334 53.077333 8.32 102.016 10.474667 143.146667 7.466667l79.253333-295.744a19.776 19.776 0 0 0-14.08-24.149333l-376.746666-100.949334a19.776 19.776 0 0 0-24.234667 13.866667l-81.28 303.36z m144.832 289.578667a39.296 39.296 0 0 0-48.213333 27.541333 39.296 39.296 0 0 0 27.968 47.957334 39.296 39.296 0 0 0 48.213333-27.541334 39.296 39.296 0 0 0-27.968-47.957333z"
              fill="#13227a"
              p-id="10248"></path>
      </svg>
      <svg @click="cutoverImge(1)"
           t="1569729131443"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="9402"
           width="18"
           height="18">
        <path d="M312.56325 61.85579c15.286148 0 29.522384 5.878894 40.166815 16.564257l389.69649 390.391315c1.425466 1.39272 2.537799 2.577708 3.449565 3.846608l2.304486 2.905166c11.362792 11.416004 16.945951 24.848944 16.945951 39.068807 0 14.475689-5.708002 28.010961-16.056698 38.110993L356.692307 940.958702c-10.612709 10.467399-24.785499 16.236799-39.892569 16.236799-14.772448 0-28.726252-5.599532-39.287795-15.753799-10.497075-10.18599-16.538675-24.390503-16.538675-38.95215 0-14.382569 5.722328-28.009937 16.142655-38.366819l353.968777-350.170265L272.59905 154.524352c-10.249435-10.30981-15.909341-23.781636-15.909341-37.994336 0-14.889105 6.051833-28.859281 17.000186-39.333844C284.109198 67.306942 297.939181 61.85579 312.56325 61.85579z"
              p-id="9403"
              fill="#13227a"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { preLoadImge, directive } from './utils'

export default {
  name: "Album",
  components: {},
  data () {
    return {
      cur: {},
      curIndex: 0,
      curRotate: 0,
      rotateOpation: {
        rotate: 0,
        callBack: (rotate) => {
          this.curRotate = rotate
        }
      },
      isShow: false
    };
  },
  props: {
    defaultIndex: {
      default: 0,
      type: Number
    },
    imageList: {
      default: function () {
        return []
      },
      type: Array,
      required: true
    },
    preLoadCount: {
      default: 2,
      type: Number
    },
    styleMe: {
      default: function () {
        return {}
      },
      type: Object
    }
  },
  directives: directive,
  // 计算属性
  computed: {},
  // 监控data
  watch: {
    'curIndex': function (n) {
      preLoadImge(this.imageList, n, this.preLoadCount)
    },
    'imageList': function (n) {
      preLoadImge(n, this.curIndex, this.preLoadCount);
    }
  },
  //方法集合
  methods: {
    cutoverImge (number) {
      this.isShow = true;
      this.curRotate = 0;
      this.rotate(0)
      this.curIndex = this.curIndex + number;
      if (this.curIndex >= this.imageList.length) {
        this.curIndex = 0
      }
      if (this.curIndex < 0) {
        this.curIndex = this.imageList.length - 1;
      }
      this.cur = this.imageList[this.curIndex];
      setTimeout(() => {
        this.isShow = false;
      }, 50)
    },
    rotate (rotate) {
      this.rotateOpation.rotate = this.curRotate + rotate;
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.curIndex = this.defaultIndex;
    this.cur = this.imageList[this.curIndex];
    preLoadImge(this.imageList, this.curIndex, this.preLoadCount)
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
}
</script>
<style lang='scss' scoped>
.img-cur {
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  .Occlusion {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .option {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 999;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
  .viewImg {
    position: absolute;
    height: auto;
    top: 50%;
    left: 50%;
    cursor: pointer;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    &.hide {
      opacity: 0;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
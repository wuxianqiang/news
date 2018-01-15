<template>
  <div class="tab">
      <div class="tab-link">
        <router-link to="/news" class="item">
          要闻
        </router-link>
        <router-link to="/recommend" class="item">
          推荐
        </router-link>
        <router-link to="/videos" class="item">
          视频
        </router-link>
        <router-link to="/beijing" class="item">
          北京
        </router-link>
        <router-link to="/recreation" class="item">
          娱乐
        </router-link>
        <router-link to="/nba" class="item">
          NBA
        </router-link>
      </div>
      <div class="tab-icon">
        <img @click="showMenu" class="icon" src="./arrow.svg" alt="" />
      </div>
      <div class="menu-wrapper" v-show="flag">
        <div class="menu-change">
          切换频道
          <img @click="showMenu" class="icon" src="./arrow-top.svg" alt="" />
        </div>
        <ul class="menu-select">
          <li class="menu-item" @click="showMenu"><a href="/#/news">要闻</a></li>
          <li class="menu-item" @click="showMenu"><a href="/#/recommend">推荐</a></li>
          <li class="menu-item" @click="showMenu"><a href="/#/videos">视频</a></li>
          <li class="menu-item" @click="showMenu"><a href="/#/beijing">北京</a></li>
          <li class="menu-item" @click="showMenu"><a href="/#/recreation">娱乐</a></li>
          <li class="menu-item" @click="showMenu"><a href="/#/nba">NBA</a></li>
        </ul>
        <div class="menu-edit">
          编辑
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    showMenu () {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab
  display flex
  height 40px
  width 100%
  font-size 16px
  line-height 40px
  .tab-link
    flex 1
    .item
      float left
      width 54px
      height 40px
      color #666
      text-align center
    .router-link-active
      color #448aff
  .tab-icon
    width 35px
    .icon
      width 18px
      height 40px
      font-size 14px
      opacity 0.5
  .menu-wrapper
    position fixed
    top 44px
    left 0
    z-index 999
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.2)
    .menu-change
      padding 0 0 0 15px
      color #999
      font-size 14px
      height 44px
      line-height 44px
      background #fff
      border-bottom 1px solid #e1e1e1
      .icon
        float right 
        width 18px
        padding 10px 17px 0 0
        opacity 0.5
    .menu-select
      height 44px
      background #fff
      .menu-item
        text-align center
        float left
        width 16%
    .menu-edit
      clear both
      background #fff
      width 100%
      height 44px
      text-align center
      font-size 14px
      height 44px
      line-height 44px
      color #999
</style>

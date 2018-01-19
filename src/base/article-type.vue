<template>
<div>
  <a :href="url" v-if="articleType===0" class="type0-article">
          <div class="type0-left">
              <p class="type0-title">{{title}}</p>
              <div class="type0-info">
                  <span class="type0-scorce">{{source}}</span>
                  <span class="type0-num" v-show="commentNum!==0">{{commentNum}}评</span>
              </div>
          </div>
          <div class="type0-right">
              <img class="type0-img" :src="img" alt="">
          </div>
  </a>
  <a :href="url" v-if="articleType===3" class="type3-article">
          <p class="type3-title">{{title}}</p>
          <div class="type3-wrapper">
            <img class="type3-icon" src="./play-circle.svg" alt="">
            <img class="type3-img" :src="img" alt="">
          </div>
  </a>
  <a :href="url" v-if="articleType===1" class="type1-article">
          <p class="type1-title">{{title}}</p>
          <div class="type1-wrapper">
            <img class="type1-img" v-for="item in multiImgs" :src="item" alt="">
          </div>
  </a>
  </div>
</template>

<script>
export default {
  props: {
    articleType: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    },
    commentNum: {
      type: Number,
      default: 0
    },
    multiImgs: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.type0-article
  box-sizing content-box
  padding 15px 12px
  display flex
  font-size 17px
  line-height 26.5px
  color #111
  .type0-left
    margin-top -4px
    flex 1
    .type0-info
      color #888
      line-height 16px
      font-size 11px
      padding-top 10px
      .type0-scorce
        margin-right 11px
  .type0-right
    margin-left 15px
    width 116px
    height 76px
    .type0-img
      width 100%
      height 100%
.type3-article
  display block
  box-sizing content-box
  padding 15px 12px
  font-size 17px
  line-height 26.5px
  color #111
  .type3-title
    color #111
    line-height 22px
    margin-bottom 10px
    overflow: hidden
    padding-right 6px
  .type3-wrapper
    position relative
    width 100%
    .type3-icon
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)
      width 50px
      height 50px
      z-index 666
      color red;
    .type3-img
      display block
      width 100%
      height 198px
.type1-article
  display block 
  box-sizing content-box
  padding 15px 12px
  font-size 17px
  line-height 26.5px
  color #111
  overflow hidden
  .type1-title
    color #111
    line-height 22px
    margin-bottom 10px
    overflow: hidden
    padding-right 6px
  .type1-wrapper
    width 100%
    display flex
    .type1-img
      display block
      height 73px
      flex 1
      &:not(:last-child)
        margin-right 10px
</style>

<template>
  <div class="video">
      <a class="video-wrapper" :href="url">
          <img class="video-img" :src="img" alt="">
          <img class="video-icon" src="./play-circle.svg" alt="">
          <p class="video-title">{{title}}</p>
          <span class="video-count">
              {{viewCount | getTime}}
          </span>
          <span class="video-time">
              {{ts | formatTime}}
          </span>
      </a>
      <div class="video-info">
          <span class="video-source">
              {{source}}
          </span>
          <span class="video-cate" v-if="categoryChn">
              {{categoryChn}}
          </span>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
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
      categoryChn: {
        type: String,
        default: ''
      },
      ts: {
        type: Number,
        default: 0
      },
      viewCount: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
.video
  .video-wrapper
    position relative
    display block 
    box-sizing border-box
    font-size 17px
    line-height 26.5px
    color #111
    overflow hidden
    width 100%
    .video-img
      display block
      height 100%
      width 100%
    .video-icon
      position absolute
      top 50%
      left 50%
      width 50px
      height 50px
      transform translate3d(-50%, -50%, 0)
    .video-title
      position absolute
      top 0
      left 0
      color #fff
      padding 10px 10px
      width 100%
      font-size 16px
      background: linear-gradient(to bottom,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 100%)
    .video-count
      position absolute
      bottom 15px
      left 15px
      font-size 12px
      background rgba(0, 0, 0, .5)
      width  58px
      border-radius 26px
      color #fff
      text-align center
    .video-time
      position absolute
      right 15px
      bottom 15px
      font-size 12px
      background rgba(0, 0, 0, .5)
      width  58px
      border-radius 26px
      color #fff
      text-align center
  .video-info
    height 46px
    line-height 46px
    margin 0 10px
    .video-source
      color rgb(68, 138, 255)
      font-size 12px
      margin-right 10px
    .video-cate
      padding 5px 10px
      font-size 12px   
      background #eee
      color #888          
</style>


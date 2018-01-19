<template>
  <div class="news">
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider v-if="thumbnails.length">
          <div v-for="item in thumbnails">
            <a :href="item.surl">
              <img :src="item.thumbnails" alt="thumbnails">
            </a>
          </div>
        </slider>
      </div>
    </div>
    <a class="weather">
      <div class="temperature">
        <span class="number">{{weather.degree}}
          <i class="icon">。</i>
          <span class="text">
            <i class="icon"></i>
            {{weather.weather}}
          </span>
        </span>
        <div class="today">今天 {{weather.weather}}</div>
      </div>
      <div class="temp"></div>
      <div class="address">
        <div class="beijing">北京</div>
        <div class="more">未来天气情况</div>
      </div>
    </a>
    <h1 class="title">
      <img src="http://mat1.gtimg.com/www/mobi/2017/image/section-title-24hours.svg" alt="">
    </h1>
    <div v-if="newsList.length">
      <div v-for="item in newsList">
        <article-type :url="item.url" :img="item.thumbnails[0]" :source="item.source" :commentNum="item.comment_num" :title="item.title" :articleType="Number(item.articletype)" :multiImgs="[]"></article-type>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider'
import {getNews, getWeather} from 'api/getNews'
import ArticleType from 'base/article-type'
import {ERR_OK} from 'api/config'

export default {
  data () {
    return {
      thumbnails: [],
      weather: {},
      newsList: []
    }
  },
  created () {
    this._getNews()
    this._getWeather()
  },
  components: {
    Slider,
    ArticleType
  },
  computed: {
    getFirstNews () {
      return this.thumbnails[0].title
    },
    getFirstUrl () {
      return this.thumbnails[0].url
    }
  },
  methods: {
    _getNews () {
      getNews().then((data) => {
        if (data.ret === ERR_OK) {
          let list = data.idlist[0].newslist
          this.newsList = list.slice(2)
          this.thumbnails.push(list[0], list[1])
        }
      })
    },
    _getWeather () {
      getWeather().then((data) => {
        if (data.message === 'OK') {
          this.weather = data.data.observe
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.news
  width 100%
  .slider-wrapper
    width 100%
    height 185px
    overflow hidden
    position relative
    .slider-content
      width 100%
      height 100%
  .firstnews
    display flex
    min-height 80px
    width 100%
    font-size 17px
    margin 12px 0
    color #111
    .text
      margin 12px
      flex 1
      line-height 26px
      margin-right 12px
    .imgs
      margin 12px 12px 0 0
      width 110px
      background url("0.jpg") no-repeat
      background-size 110px 72px
  .weather
    display flex
    height 60px
    width 100%
    font-size 13px
    padding-top 15px
    border-top 10px solid #f9f9f9
    border-bottom 10px solid #f9f9f9
    .temperature
      width 86px
      margin-left 12px
      .number
        font-size 24px
        color #111
        position relative
        padding-left 7px
        .icon
          position absolute
          top -15px
          right -25px
        .text
          position absolute
          top 5px
          right -42px
          font-size 13px
          .icon
            position absolute
            top -2px
            right -25px
            display block
            width 20px
            height 20px
            background: url("http://mat1.gtimg.com/www/mobi/2017/image/weather/02.svg") no-repeat
      .today
        height 15px
        line-height 15px
        padding 5px 0 0 7px
    .temp
      flex 1
    .address
      width 86px
      margin-right 12px
      text-align right
      line-height 24px
      .more
        margin-top 5px
        background: #BFCACE
        border-radius: 7px
        text-align center
        color #fff
        line-height 14px
        font-size 11px
  .news-list
    font-size 17px
    line-height 22px
    .news-big
      display block
      margin 12px
      .big-title
        color #111
        margin-bottom 10px
        margin-top 10px
        overflow hidden
        padding-right 6px
      .big-img
        display block
        width 100%
        height 198px
      .icon
        margin 12px 0
        .icon-text
          vertical-align top
          font-size 9px
          color #fff
          padding 2px
          background #448aff
        .icon-left
          vertical-align center
          display inline-block
          width 12px
          height 12px
          border-radius 50%
          background #448aff
          &:after
            content ''
            display block
            float right
            width 4px
            height 4px
            border-width 0 0 1px 1px
            border-style solid
            border-color #FFF
            margin 2px 2px 0 0
        .icon-right
          vertical-align top
          color #448aff
          font-size 11px
    .news-small
      display flex
      padding 12px
      color #111
      line-height 26px
      .small-title
        vertical-align top
        flex 1
      .small-img
        vertical-align top
        padding-left 12px
        display block
        width 110px
        height 72px
  .title
    margin 12px
</style>
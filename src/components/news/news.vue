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
    <a :href="getFirstUrl" class="firstnews" v-if="thumbnails.length">
      <div class="text">
        {{getFirstNews}}
      </div>
      <div class="imgs">
      </div>
    </a>
  </div>
</template>

<script>
import Slider from 'base/slider'
import {getNews} from 'api/getnews'
import {ERR_OK} from 'api/config'

export default {
  data () {
    return {
      thumbnails: []
    }
  },
  created () {
    this._getNews()
  },
  components: {
    Slider
  },
  computed: {
    getFirstNews () {
      return this.thumbnails[1].title
    },
    getFirstUrl () {
      return this.thumbnails[1].url
    }
  },
  methods: {
    _getNews () {
      getNews().then((data) => {
        if (data.ret === ERR_OK) {
          let list = data.idlist[0].newslist
          this.thumbnails.push(list[0], list[1])
          console.log(this.thumbnails)
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
    height 80px
    width 100%
    font-size 17px
    margin-top 12px
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
      
</style>
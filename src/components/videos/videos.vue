<template>
  <div>
    <div v-if="videos.length">
      <div v-for="item in videos">
        <rcd-video :title="item.title" :img="item.img" :url="item.vurl" :source="item.source" :categoryChn="item.category_chn" :ts="item.duration" :viewCount="item.view_count"></rcd-video>
      </div>
    </div>
  </div>
</template>

<script>
import {getVideos} from 'api/getVideos'
import {ERR_OK} from 'api/config'
import RcdVideo from 'base/rcd-video'

export default {
  created () {
    this._getVideos()
  },
  components: {
    RcdVideo
  },
  data () {
    return {
      videos: []
    }
  },
  methods: {
    _getVideos () {
      let flag = false
      getVideos().then((data) => {
        if (data.code === ERR_OK) {
          this.videos = data.data
        }
        flag = true
      })
      if (!flag) {
        let timer = setInterval(() => {
          getVideos().then((data) => {
            clearInterval(timer)
            if (data.code === ERR_OK) {
              this.videos = data.data
            }
          })
        }, 1000)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
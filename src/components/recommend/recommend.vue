<template>
  <div class="recommend">
    <div v-if="recommends.length">
      <div v-for="item in recommends">
        <article-type :url="item.url" :img="item.img" :source="item.source" :commentNum="item.comment_num" :title="item.title" :articleType="item.article_type" :multiImgs="item.multi_imgs"></article-type>
      </div>
    </div>
  </div>
</template>

<script>
import {getRecommend} from 'api/getRecommend'
import {ERR_OK} from 'api/config'
import ArticleType from 'base/article-type'

export default {
  created () {
    this._getRecommend()
  },
  components: {
    ArticleType
  },
  data () {
    return {
      recommends: []
    }
  },
  methods: {
    _getRecommend () {
      let flag = false
      getRecommend().then((data) => {
        flag = true
        if (data.code === ERR_OK) {
          this.recommends = data.data
        }
      })
      if (!flag) {
        let timer = setInterval(() => {
          getRecommend().then((data) => {
            clearInterval(timer)
            if (data.code === ERR_OK) {
              this.recommends = data.data
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
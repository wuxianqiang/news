<template>
  <div class="recommend">
    <div v-if="newslist.length">
      <div v-for="item in newslist">
        <article-type :url="item.url" :img="item.thumbnails[0]" :source="item.source" :commentNum="item.comment_num" :title="item.title" :articleType="Number(item.articletype)" :multiImgs="item.thumbnails"></article-type>
      </div>
    </div>
  </div>
</template>

<script>
import {getBeijing} from 'api/getBeijing'
import {ERR_OK} from 'api/config'
import ArticleType from 'base/article-type'

export default {
  created () {
    this._getBeijing()
  },
  components: {
    ArticleType
  },
  data () {
    return {
      newslist: []
    }
  },
  methods: {
    _getBeijing () {
      getBeijing().then((data) => {
        if (data.ret === ERR_OK) {
          this.newslist = data.idlist[0].newslist
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

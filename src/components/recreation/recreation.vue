<template>
  <div class="recommend">
    <div v-if="datalist.length">
      <div v-for="item in datalist">
        <article-type :url="item.url" :img="item.bimg" :source="item.source" :commentNum="item.comment_num" :title="item.title" :articleType="item.article_type" :multiImgs="item.multi_imgs"></article-type>
      </div>
    </div>
  </div>
</template>

<script>
import {getRcreation} from 'api/getRcreation'
import {ERR_OK} from 'api/config'
import ArticleType from 'base/article-type'

export default {
  created () {
    this._getRcreation()
  },
  components: {
    ArticleType
  },
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    _getRcreation () {
      let flag = false
      getRcreation().then((data) => {
        flag = true
        if (data.code === ERR_OK) {
          this.datalist = data.data
        }
      })
      if (!flag) {
        let timer = setInterval(() => {
          getRcreation().then((data) => {
            clearInterval(timer)
            if (data.code === ERR_OK) {
              this.datalist = data.data
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
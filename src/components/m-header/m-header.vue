<template>
  <div class="m-header">
      <div class="logo">
          <a href="javascript:;" class="home">首页</a>
      </div>
      <div class="avatar">
          <img class="icon" src="./home.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.m-header
    display flex
    height 44px
    background: linear-gradient(to right, rgba(84,190,250,1) 0%,rgba(68,138,255,1) 100%)  
    .logo
        flex 1
        .home
            display block
            width 150px
            height 44px
            font-size 0
            margin 0 auto
            background-image url("logo-text-white.svg")
            background-repeat no-repeat
            background-position center center
            background-size 90px auto
    .avatar
        width 25px
        padding 10px 10px 0 0
        .icon
            width 22px
            opacity 0.5
</style>

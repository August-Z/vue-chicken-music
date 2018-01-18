<template>
  <transition name="slide">
    <music-list></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'

  export default {
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition all .3s ease

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
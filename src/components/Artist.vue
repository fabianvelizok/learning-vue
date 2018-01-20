<template lang="pug">
  li.artist
    div.artist-container
      h2
        a(v-bind:href="artist.url" target="_blank")
          |{{artist.name}}
      img(v-bind:src="artist.image[2]['#text']")
</template>

<script>

export default {
  name: 'artist',
  props: ['artist'],
}

</script>

<style lang="stylus" scoped>
  li.artist
    margin: 0
    float: left
    width 50%
    padding: 10px

    .artist-container
      border: 1px solid #cfcfcf

</style>

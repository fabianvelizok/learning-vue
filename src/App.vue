<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Platzi music
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{country.name}}
    div
      spinner(v-show="loading")
      ul(v-show="!loading")
        artist(
          v-for="artist in artists"
          v-bind:artist="artist"
          v-bind:key="artist.mbind"
        )
</template>

<script>
import getArtists from './api';

// Components
import Artist from './components/Artist.vue';
import Spinner from './components/Spinner.vue';

export default {
  name: 'app',
  data () {
    return {
      loading: false,
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina'},
        { name: 'Colombia', value: 'colombia'},
        { name: 'España', value: 'spain'},
      ],
      selectedCountry: 'argentina',
    }
  },
  components: {
    Artist,
    Spinner,
  },
  mounted () {
    this.refreshArtists();
  },
  methods: {
    refreshArtists() {
      let self = this;

      self.artists = [];
      self.loading = true;

      getArtists(this.selectedCountry)
        .then(artists => self.artists = artists)
        .catch(error => console.error(error))
        .finally(() => self.loading = false );
    },
  },
  watch: {
    selectedCountry(){
      this.refreshArtists()
    },
  }
}
</script>

<style lang="stylus">
  *
    box-sizing: border-box

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

  h1, h2
    font-weight normal

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983
</style>

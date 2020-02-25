<template>
  <v-app>
    <app-bar/>
    <v-container fluid pa-0>
      <v-row align="center"
             justify="center"
             class="app-content"
             :style="{height: windowSize.y + 'px'}">
        <div>
          <convert/>
        </div>
      </v-row>
    </v-container>
    <app-footer/>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data: () => ({
      windowSize: {
        x: 0,
        y: 0,
      },
    }),
    mounted () {
      this.onResize()
    },
    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      }
    }
  }
</script>

<style>
  .app-content {
    background-color: #F6F5F8;
  }
</style>
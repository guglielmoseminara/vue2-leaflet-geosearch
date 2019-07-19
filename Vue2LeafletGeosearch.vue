<template>
  <div>

  </div>
</template>

<script>
// import L from 'leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';


export default {
  props: {
    options: {
      required: true,
    },
  },
  name: 'v-geosearch',
  mounted() {
    this.add();
  },
  beforeDestroy() {
    this.remove();
  },
  data(){
    return {
      query: undefined,
      searchControl: undefined
    }
  },
  methods: {
    deferredMountedTo(parent) {
      this.searchControl = new GeoSearchControl(this.options);
      parent.addControl(this.searchControl);
    },
    remove() {
      if (this.markerCluster) {
        this.$parent.removeLayer(this.markerCluster);
      }
    },
    add() {
      if (this.$parent._isMounted) {
        this.deferredMountedTo(this.$parent.mapObject);
      }
    },
    setQuery(query) {
      this.searchControl.searchElement.elements.input.value = query;
    }
  },
};
</script>

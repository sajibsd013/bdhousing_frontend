<template>
  <div class="d-none d-sm-block">
    <carousel :loop="true" :autoplay="true" :perPage="1" :autoplayTimeout="2000">
      <slide>
        <img src="/img/slider/s1.jpg" class="d-block w-100" />
      </slide>
      <slide>
        <img src="/img/slider/s2.jpg" class="d-block w-100" />
      </slide>

    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style></style>

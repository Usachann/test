<template>
  <div>
    <div class="">
      <h1 class="h2">{{ developer?.title?.ru }}</h1>
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide
          class="swiper-slide"
          v-for="(img, id) in developer?.images"
          :key="id"
        >
          <img :src="img" alt="Image" class="image" />
        </swiper-slide>
      </swiper>
      <div class="text-container">
        <article>
          <p class="inform-text" v-html="developer?.description?.ru"></p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    };
  },
  props: ["developer"],
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-height: 60vh;
}

.image {
  max-width: 100%;
  height: auto;
}
</style>

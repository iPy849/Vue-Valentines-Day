<template>
  <main class="max-w-5xl m-auto">

    <header
        class="p-4"
    >
      <h1
          class="
        text-center text-4xl md:text-5xl
        m-auto
        font-Loved-by-the-king font-bold
        text-stroke
        text-stroke-primary-400
        text-stroke-0.5
        text-primary-200
      "
      >
        <span v-if="isValentineDay">Feliz San Valentín ❤️!</span>
        <span v-else>[Toca hacer un logo]</span>
      </h1>
    </header>
    <CardEditorComponent/>
    <SmallBlogComponent/>
    <FooterComponent/>
  </main>
</template>

<script setup>
import FooterComponent from '@/views/HomeView/FooterComponent.vue';
import SmallBlogComponent from '@/views/HomeView/SmallBlogComponent.vue';
import CardEditorComponent from "@/views/HomeView/CardEditorComponent.vue";
import {isValantineDayComp} from "@/views/HomeView/utils.js";

const isValentineDay = isValantineDayComp();
</script>

<style lang="scss">
@layer sections {
  section,
  footer {
    @apply pt-3 border-b-[1px] border-white border-solid max-w-5xl m-auto p-6 mb-6;
  }
}
</style>
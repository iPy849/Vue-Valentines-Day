<template>
  <div class="px-8">
    <swiper-container
        :centered-slides="true"
        @swiperslidechange="onSlideChange"
        :effect="'cards'"
        :grabCursor="true"
    >
      <swiper-slide
          v-for="(tpl, index) in templateNames"
          :key="index"
          class="rounded"
>
        <img
            :src="tpl.image"
            :alt="`tpl_${index}`"
            class="border-2 rounded shadow"
            :class="{
            'border-primary-200': template !== index,
            'border-primary-0': template === index,
          }"
        />
      </swiper-slide>
    </swiper-container>
    <small class="text-xs">(Desliza las tarjetas para seleccionar tu plantilla favorita)</small>
  </div>
</template>

<script setup>

import {computed, ref} from "vue";
import TemplatesComponents from "@/components/content/index.js";

const emit = defineEmits(["onSelected"])

const template = ref(0);

const templateNames = computed(() => {
  const templates = [];
  let index = 0;
  for (const key in TemplatesComponents) {
    templates.push({
      name: key.replace("Component", ""),
      image: `img/tpl_${index++}.png`,
    });
  }
  return templates;
});

const onSlideChange = (e) => {
  template.value = e.detail[0].activeIndex;
  emit('onSelected', template.value);
}
</script>
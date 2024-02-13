<template>
  <div>
    <small class="text-xs"
    >(Clickea la imagen para seleccionar la plantilla)</small
    >
    <div class="flex flex-wrap flex-row items-center justify-start">
      <div
          v-for="(tpl, index) in templateNames"
          :key="index"
          @click="() => selectionHandler(index)"
          class="w-1/2 md:w-1/4 p-4 rounded"
          :class="{
            'border-primary-400': template === index,
          }"
      >
        <img
            :src="tpl.image"
            :alt="`tpl_${index}`"
            :class="{ 'border-primary-400 p-1': template === index }"
            class="border-2 border-primary-400 rounded shadow"
        />
        <p
            class="text-primary-400 text-xs text-center"
        >
          {{ tpl.name }}
        </p>
      </div>
    </div>
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

const selectionHandler = (i) => {
  template.value = i;
  emit('onSelected', template.value);
}
</script>
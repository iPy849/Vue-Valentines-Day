<template>
  <legend
    class="
      shadow-md
      p-6
      rounded
      border-2 border-white
      max-w-5xl
      w-full
      my-6
      bg-red-900/10
      m-auto
    "
  >
    <form @submit.prevent>
      <label
        for="message"
        class="
          form-label
          inline-block
          mb-2
          text-base text-white
          underline underline-offset-2
        "
        >Dedícale unas palabras:</label
      >
      <div class="w-full">
        <textarea
          class="
            form-textarea
            block
            w-full
            bg-red-100
            border-none
            ring-transparent
            rounded
            shadow
          "
          id="message"
          rows="3"
          placeholder="Escribe tu mensaje aquí..."
          v-model="message"
          :maxlength="maxMessageLength"
        ></textarea>
        <p class="text-sm text-end text-white">
          {{ message.length }}/{{ maxMessageLength }}
        </p>
      </div>

      <label
        class="
          form-label
          inline-block
          mb-2
          text-base text-white
          underline underline-offset-2
        "
        >Selecciona una plantilla:</label
      >
      <br>
      <small class="text-white block md:hidden text-xs">(Toca la imagen para seleccionar una plantilla)</small>
      <div class="flex flex-wrap flex-col md:flex-row items-center justify-center">
        <div
          v-for="(name, index) in templateNames"
          :key="index"
          @click="() => (template = index)"
          class="w-full md:w-1/5 p-3 rounded"
          :class="{
            'bg-white': template === index,
          }"
        >
          <img
            :src="`src/assets/img/tpl_${index}.png`"
            :alt="`tpl_${index}`"
            class="border-2 border-white rounded shadow"
          />
          <p
            class="text-white text-start"
            :class="{ 'text-red-500': template === index }"
          >
            {{ name }}
          </p>
        </div>
      </div>
    </form>
  </legend>
</template>
<script>
import TemplatesComponents from "@/components/content";
export default {
  name: "CardFormComponent",
  data() {
    return {
      template: null,
      message: "",
      maxMessageLength: 120,
    };
  },
  computed: {
    templateNames() {
      const templates = [];
      for (const key in TemplatesComponents) {
        templates.push(key.replace("Component", ""));
      }
      return templates;
    },
  },
};
</script>
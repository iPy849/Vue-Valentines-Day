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
    v-if="link === null"
  >
    <form @submit.prevent>
      <label
        for="messageText"
        class="
          font-Loved-by-the-king
          text-2xl
          font-bold
          form-label
          inline-block
          mb-2
          text-white
        "
        >Dedícale unas palabras:</label
      >
      <div class="w-full">
        <textarea
          class="
            form-textarea
            block
            w-full
            border-none
            ring-transparent
            rounded
            shadow
          "
          id="messageText"
          rows="3"
          placeholder="Escribe tu mensaje aquí..."
          v-model="message"
          :maxlength="maxMessageLength"
        >
        </textarea>
        <p class="text-sm text-end text-white">
          {{ message.length }}/{{ maxMessageLength }}
        </p>
      </div>

      <label
        class="
          font-Loved-by-the-king
          text-2xl
          font-bold
          form-label
          inline-block
          mb-2
          text-white
        "
        >Selecciona una plantilla:</label
      >
      <br />
      <small class="text-white block md:hidden text-xs"
        >(Toca la imagen para seleccionar una plantilla)</small
      >
      <div
        class="flex flex-wrap flex-col md:flex-row items-center justify-center"
      >
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
            :src="`/assets/img/tpl_${index}.png`"
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
      <button
        type="submit"
        class="
          block
          m-auto
          w-full
          md:w-auto
          rounded-lg
          border-2 border-white
          text-white
          hover:bg-white hover:text-red-500
          active:bg-red-100
          focus:border-none
          p-3
          my-3
        "
        :disabled="isCorrectForm"
        @click="generateLink"
      >
        Generar tarjeta
      </button>
      <p
        class="border-b-2 border-t-2 border-white w-fit m-auto p-1 text-white text-xs"
        v-if="isCorrectForm"
      >
        Recuerda escribir un mensaje y escoger una plantilla para tu tarjeta
      </p>
    </form>
  </legend>
  <div v-else class="text-red-500 bg-white mt-6 p-3 rounded">
    <h3 class="text-xl">Aquí está el enlace para tu tarjeta:</h3>
    <div
      class="
        flex
        justify-start
        items-center
        bg-gray-600
        text-white
        p-3
        my-3
        rounded
      "
      @click="copyToClipboard"
    >
      <img src="@/assets/img/clipboard_emoji.png" class="h-8 mr-3" />
      <p v-if="!copyFail">Haz click para copiar el enlace a tu tarjeta</p>
      <p v-else>{{ link }}</p>
    </div>
  </div>
</template>
<script>
import TemplatesComponents from "@/components/content";
import AES from "crypto-js/aes";

export default {
  name: "CardFormComponent",
  data() {
    return {
      template: null,
      message: "",
      maxMessageLength: 120,
      link: null,
      copyFail: false,
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
    isCorrectForm() {
      return this.message === "" || this.template === null;
    },
  },
  methods: {
    generateLink() {
      const cipherMessage = AES.encrypt(
        this.message,
        window.encryptKey
      ).toString();
      this.link = `${window.location.host}/tpl/${
        this.template
      }?msg=${encodeURIComponent(cipherMessage)}`;
    },
    copyToClipboard() {
      if (this.copyFail) return;

      this.$copyText(this.link)
        .then(() => {
          alert("Se ha copiado el enlace a tu tarjata correctamente!");
        })
        .catch((e) => {
          alert(
            "Lo sentimos algo, ha ocurrido. Le recomendamos copiar el enlace manualmente!"
          );
          this.copyFail = true;
        });
    },
  },
};
</script>
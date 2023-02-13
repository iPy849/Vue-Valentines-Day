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
      <small class="text-white block text-xs"
        >(Escribe una pequeña dedicatoria)</small
      >

      <textarea
        class="
          form-textarea
          block
          w-full
          border-2 border-white
          bg-red-50/20
          ring-transparent
          rounded
          shadow
          text-white
          mt-3
          placeholder-white
        "
        id="messageText"
        rows="5"
        placeholder="Escribe tu mensaje aquí..."
        v-model="message"
        :maxlength="maxMessageLength"
      >
      </textarea>
      <p class="text-sm text-end text-white">
        {{ message.length }}/{{ maxMessageLength }}
      </p>

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
      <small class="text-white block text-xs"
        >(Clickea la imagen para seleccionar una plantilla)</small
      >
      <div class="flex flex-wrap flex-row items-center justify-start">
        <div
          v-for="(tpl, index) in templateNames"
          :key="index"
          @click="
            () => {
              template = index;
              goToBotonGenerar();
            }
          "
          class="w-1/2 md:w-1/5 p-3 rounded"
          :class="{
            'bg-white': template === index,
          }"
        >
          <img
            :src="tpl.image"
            :alt="`tpl_${index}`"
            class="border-2 border-white rounded shadow"
          />
          <p
            class="text-white text-start"
            :class="{ 'text-red-500': template === index }"
          >
            {{ tpl.name }}
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
          disabled:border-none disabled:bg-transparent disabled:text-white
        "
        :disabled="!isCorrectForm"
        @click="generateLink"
        ref="botonGenerar"
      >
        <span v-if="!isCorrectForm"
          >Completa el formulario para generar la tarjeta</span
        >
        <span v-else>Generar tarjeta</span>
      </button>
      <p
        class="
          border-b-2 border-t-2 border-white
          w-fit
          m-auto
          p-1
          text-white text-xs
        "
        v-if="!isCorrectForm"
      >
        Recuerda escribir un mensaje y escoger una plantilla para tu tarjeta
      </p>
    </form>
  </legend>
  <div v-else class="bg-white mt-6 p-3 rounded m-auto w-fit">
    <h3 class="text-xl text-red-500" ref="enlace">Aquí está el enlace para tu tarjeta:</h3>
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
        w-fit
      "
      @click="copyToClipboard"
    >
      <img src="@/assets/img/clipboard_emoji.png" class="h-8 mr-3" />
      <p v-if="!copyFail">Haz click para copiar el enlace</p>
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
      let index = 0;
      for (const key in TemplatesComponents) {
        templates.push({
          name: key.replace("Component", ""),
          image: `img/tpl_${index++}.png`,
        });
      }
      return templates;
    },
    isCorrectForm() {
      return this.message !== "" && this.template !== null;
    },
  },
  methods: {
    goToBotonGenerar() {
      const scrollOffset = this.$refs.botonGenerar.offsetTop;
      window.scroll({
        top: scrollOffset - 200,
        behavior: "smooth",
      });
    },
    generateLink() {
      const cipherMessage = AES.encrypt(
        this.message,
        window.encryptKey
      ).toString();
      this.link = `${window.location.host}/tpl/${
        this.template
      }?msg=${encodeURIComponent(cipherMessage)}`;

      this.$nextTick(() => {
        const scrollOffset = this.$refs.enlace.offsetTop;
        window.scroll({
          top: scrollOffset - 200,
          behavior: "smooth",
        });
      });
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
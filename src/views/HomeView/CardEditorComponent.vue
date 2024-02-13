<template>
  <section filled>
    <h2 class="text-2xl font-bold">
      Date un chance
      <img
          src="../../assets/img/nuevos/beaming-face-with-smiling-eyes_1f601.gif"
          alt=";)"
          class="inline w-10 h-10"
      />
    </h2>
    <p>
      <span v-if="isValentineDay">Hoy es un lindo día</span>
      <span v-else>Prepárate</span>
      para expresar todo tu amor y cariño de una manera única y especial. Aquí, podrás crear hermosas tarjetas
      que transmitirán tus sentimientos a esa persona especial en tu vida. ¡Deja volar tu creatividad y
      haz que este San Valentín sea inolvidable!
    </p>
    <div v-if="!link">

    <h2 class="text-2xl font-bold">
      Elige una plantilla
      <img
          src="../../assets/img/nuevos/smiling-face_263a-fe0f.gif "
          alt=";)"
          class="inline w-10 h-10"
      />
    </h2>
    <MobileCardTemplateSelectorComponent @onSelected="handleSelection" class="block md:hidden"/>
    <DesktopCardTemplateSelectorComponent @onSelected="handleSelection" class="hidden md:block" />
      <h2 class="text-2xl font-bold"
      >Unas palabras
        <img
            src="../../assets/img/nuevos/face-with-peeking-eye_1fae3.gif "
            alt=";)"
            class="inline w-10 h-10"
        />?</h2>
      <form @submit.prevent>
        <small class="block text-xs"
        >(Escribe una pequeña dedicatoria)</small
        >
        <textarea
            class="
          form-textarea
          block
          w-full
          border-2 border-primary-200
          bg-red-50/20
          ring-transparent
          rounded
          shadow
          placeholder-primary-400
        "
            id="messageText"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            v-model="message"
            :maxlength="maxMessageLength"
        >
      </textarea>
        <p class="text-xs text-end text-primary-200">
          {{ message.length }}/{{ maxMessageLength }}
        </p>
        <button
            type="submit"
            class="
          block
          m-auto
          w-full
          md:w-auto
          rounded
          border-2 border-primary-400
          hover:bg-primary-400 hover:text-white
          active:bg-primary-200
          focus:border-none
          p-4
          text-primary-400
          font-bold
          disabled:border-primary-200 disabled:bg-primary-0
          mt-4
        "
            :disabled="!isCorrectForm"
            @click="generateLink"
        >
        <span v-if="!isCorrectForm"
        >Ups, parece que aún no está completa la tarjeta</span
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
    </div>
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
          ref="copyButton"
      >
        <img src="../../assets/img/clipboard_emoji.png" class="h-8 mr-3"/>
        <p v-if="!copyFail">Haz click para copiar el enlace</p>
        <p v-else>{{ link }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import TemplatesComponents from "@/components/content/index.js";
import AES from "crypto-js/aes";
import {isValantineDayComp} from "@/views/HomeView/utils.js";
import {computed, nextTick, ref} from "vue";
import useClipboard from 'vue-clipboard3';
import MobileCardTemplateSelectorComponent from "@/components/home/MobileCardTemplateSelectorComponent.vue";
import DesktopCardTemplateSelectorComponent from "@/components/home/DesktopCardTemplateSelectorComponent.vue";

// Data
const template = ref();
const message = ref("");
const maxMessageLength = ref(120);
const link = ref("");
const copyFail = ref();

// Refs
const enlace = ref();

// Computed
const isValentineDay = isValantineDayComp();

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

const isCorrectForm = computed(() => message.value !== "" && template.value !== null);

// Functions
function generateLink() {
  const cipherMessage = AES.encrypt(
      message.value,
      window.encryptKey
  ).toString();
  link.value = `${window.location.host}/tpl/${
      template.value
  }?msg=${encodeURIComponent(cipherMessage)}`;

  nextTick(() => {
    const scrollOffset = enlace.value.offsetTop;
    window.scroll({
      top: scrollOffset - 200,
      behavior: "smooth",
    });
  });
}

function copyToClipboard() {
  if (copyFail.value) return;

  const {toClipboard} = useClipboard()
  toClipboard(link.value)
      .then(() => {
        alert("Se ha copiado el enlace a tu tarjeta correctamente!");
      })
      .catch((e) => {
        alert(
            "Lo sentimos algo, ha ocurrido. Le recomendamos copiar el enlace manualmente!"
        );
        copyFail.value = true;
      });
}

function handleSelection(e) {
  template.value= e;
}


</script>
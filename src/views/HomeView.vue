<template>
  <header
    class="
      relative
      bg-gradient-to-b
      from-red-900
      to-red-700/0
      py-6
      overflow-hidden
    "
  >
    <div
      class="
        bg-[url('@/assets/img/hearts_bg.png')]
        bg-left-bottom bg-no-repeat bg-cover
        h-full
        w-4/5
        absolute
        top-0
        left-1/4
        -z-10
      "
    />
    <h1
      class="
        text-center text-3xl
        md:text-5xl
        text-white
        w-2/3
        m-auto
        font-Loved-by-the-king font-bold
      "
    >
      Feliz día de San Valentín
    </h1>
  </header>
  <section>
    <h2 class="text-3xl font-bold">
      Date un chance
      <img
        src="@/assets/img/smiling_emoji.png"
        alt=";)"
        class="inline w-10 h-10"
      />
    </h2>
    <p class="text-white md:text-lg">
      <span v-if="isValentineDay">Hoy es</span>
      <span v-else>Se acerca</span>
      el Día del Amor y la Amistad, recuerda que eres querido y apreciado por
      aquellos que te rodean. Envíales una muestra de ese amor y amistad
      incondicional a esas personas con una tarjeta digital:
    </p>
    <CardFormComponent />
  </section>
  <!-- Small blog -->
  <section>
    <h2 class="text-3xl font-bold text-end">
      <img
        src="@/assets/img/open-book_emoji.png"
        alt=";)"
        class="inline w-10 h-10"
      />
      Tantito de historia
    </h2>
    <div class="md:flex justify-center">
      <div class="md:w-1/2 h-fit p-3 rounded bg-white">
        <img
          src="@/assets/img/friendnlove.jpg"
          alt="friends image"
          class="rounded"
        />
        <small class="text-red-500">
          Foto de
          <a
            href="https://unsplash.com/@evertonvila?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            class="underline"
            >Everton Vila</a
          >
          en
          <a
            href="https://unsplash.com/es/fotos/AsahNlC0VhQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            class="underline"
            >Unsplash</a
          >
        </small>
      </div>
      <div class="md:w-1/2 md:px-3 md:mt-0 mt-3">
        <p class="text-white md:text-lg text-start md:text-end">
          En la actualidad, está celebración es para conmemorar cada 14 de
          febrero el Día del Amor y la Amistad, pero pocos saben que, en
          realidad, su nombre se debe a una celebración que recuerda al Santo de
          Los Enamorados, es decir, a San Valentín, quien era un religioso que
          defendía y casaba a jóvenes en la Antigua Roma en el siglo III. El 14
          de febrero es la fecha en la que los enamorados se envían postales de
          amor porque, según la creencia medieval de Inglaterra y Francia, ese
          día, es decir, a mediados del segundo mes del año, todas las aves
          escogen su pareja.
        </p>
        <br />
        <a
          href="https://historia.nationalgeographic.com.es/a/origen-historico-dia-san-valentin_15084"
          target="_blank"
          class="text-white md:text-lg underline text-end block"
        >
          Para más información lee este enlace...
        </a>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="bg-white">
    <h2 class="text-3xl font-bold text-red-500">
      Créditos
      <img
        src="@/assets/img/heart-hands_emoji.png"
        alt=";)"
        class="inline w-10 h-10"
      />
    </h2>
    <div class="flex justify-center">
      <div class="md:w-1/3 border-r-2 border-red-500 px-3">
        <h3 class="text-2xl font-bold text-red-500">Plantillas</h3>
        <ul class="text-red-500 list-disc">
          <li class="underline">
            <a href="https://codepen.io/howie23/pen/MKLroG"
              >https://codepen.io/howie23/pen/MKLroG</a
            >
          </li>
          <li class="underline">
            <a href="https://codepen.io/THEORLAN2/pen/bEzyjQ"
              >https://codepen.io/THEORLAN2/pen/bEzyjQ</a
            >
          </li>
          <li class="underline">
            <a href="https://codepen.io/okantiktas/pen/abbWqNL"
              >https://codepen.io/okantiktas/pen/abbWqNL</a
            >
          </li>
        </ul>
      </div>
      <div class="md:w-1/3 px-3">
        <h3 class="text-2xl font-bold text-red-500">Desarrolador:</h3>
        <ul class="text-red-500">
          <li>Alejandro Ortega</li>
          <li>
            <a href="https://twitter.com/ipy849" class="underline"
              >Twitter: iPy849</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/aleortega849/" class="underline"
              >Instagram: @aleortega849</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <p class="text-white text-center p-3">Alejandro Ortega ©2023</p>
</template>

<script>
import CardFormComponent from "@/components/CardFormComponent.vue";

export default {
  components: { CardFormComponent },
  computed: {
    isValentineDay() {
      const date = new Date(Date.now());
      return date.getDate() === 14 && date.getMonth() === 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@layer sections {
  section,
  footer {
    @apply pt-3 border-b-[1px] border-white border-solid max-w-5xl m-auto p-6 mb-6;

    h2,
    h3 {
      @apply font-Loved-by-the-king text-white;
    }
  }
}
</style>
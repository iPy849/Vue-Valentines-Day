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
  <SmallBlogComponent />
  <FooterComponent />
</template>

<script>
import CardFormComponent from '@/components/home/CardFormComponent.vue';
import FooterComponent from '@/components/home/FooterComponent.vue';
import SmallBlogComponent from '@/components/home/SmallBlogComponent.vue';

export default {
  components: { 
    CardFormComponent, FooterComponent, SmallBlogComponent },
  computed: {
    isValentineDay() {
      const date = new Date(Date.now());
      return date.getDate() === 14 && date.getMonth() === 1;
    },
  },
};
</script>

<style lang="scss">
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
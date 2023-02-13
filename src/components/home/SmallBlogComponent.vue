<template>
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
</template>

<script>
export default {
  name: "SmallBlogComponent",
};
</script>

<style>
</style>
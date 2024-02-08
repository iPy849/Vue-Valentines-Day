<template>
  <!-- Footer -->
  <footer class="bg-white md:rounded">
    <h2 class="text-3xl font-bold text-red-500">
      Créditos
      <img
          src="@/assets/img/heart-hands_emoji.png"
          alt=";)"
          class="inline w-10 h-10"
      />
    </h2>
    <div class="flex justify-center flex-col md:flex-row">
      <div class="md:w-1/3 md:border-r-2 md:border-red-500 p-3">
        <h3 class="text-2xl font-bold text-red-500">Algunas sugerencias:</h3>
        <ul class="text-red-500">
          <li class="w-16">
            <a
                href="https://www.instagram.com/lavitfit.cun/"
                class="flex justify-start items-center"
            >
              <img
                  src="@/assets/img/logos/lavitfi_cun.png"
                  alt="Lavifit.cun Image"
              />
              <p>@lavitfit.cun</p>
            </a>
          </li>
        </ul>
      </div>

      <div class="md:w-1/3 md:border-r-2 md:border-red-500 p-3">
        <h3 class="text-2xl font-bold text-red-500">Desarrollador:</h3>
        <ul class="text-red-500">
          <li>Alejandro Ortega</li>
          <li>
            <a href="https://www.instagram.com/aleortega849?igsh=bmliM3RmOWc0ZzB4" class="underline text-xs"
            >Instagram: @aleortega849</a
            >
          </li>
        </ul>
      </div>
      <div class="md:w-1/3 p-3">
        <h3 class="text-2xl font-bold text-red-500">Plantillas</h3>
        <ul class="text-red-500 list-disc ml-3">
          <li class="underline text-xs">
            <a href="https://codepen.io/howie23/pen/MKLroG"
            >https://codepen.io/howie23/pen/MKLroG</a
            >
          </li>
          <li class="underline text-xs">
            <a href="https://codepen.io/THEORLAN2/pen/bEzyjQ"
            >https://codepen.io/THEORLAN2/pen/bEzyjQ</a
            >
          </li>
          <li class="underline text-xs">
            <a href="https://codepen.io/okantiktas/pen/abbWqNL"
            >https://codepen.io/okantiktas/pen/abbWqNL</a
            >
          </li>
          <li class="underline text-xs">
            <a href="https://codepen.io/AngelaVelasquez/pen/DpMLwG"
            >https://codepen.io/AngelaVelasquez/pen/DpMLwG</a
            >
          </li>
          <li class="underline text-xs">
            <a href="https://codepen.io/lenasta92579651/pen/mdrogRR"
            >https://codepen.io/lenasta92579651/pen/mdrogRR</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <p class="text-white text-center p-3">Alejandro Ortega ©2024</p>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
</style>
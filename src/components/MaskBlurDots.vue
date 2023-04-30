<script setup lang="ts">

</script>

<template>
  <div class="relative w-64 h-64 overflow-y-scroll">
    <div class="leading-6">
      <p>
        <span class="text-lg font-semibold">The cat</span> sat on the mat, licking its paws. It was a sunny day, and the birds were singing in the trees. The cat was content to sit there and enjoy the weather.
      </p>
      <p>
        After a while, the cat got up and stretched. It yawned and then started to walk away. It was time for the cat to go on an adventure.
      </p>
      <p>
        The cat walked down the street, sniffing the air. It smelled something delicious, and it followed the smell to a nearby bakery. The cat peered through the window and saw a row of fresh-baked pastries. The cat's mouth watered.
      </p>
      <p>The cat went inside the bakery and rubbed against the baker's legs. The baker smiled and gave the cat a piece of pastry. The cat ate the pastry quickly and then asked for another one. The baker laughed and gave the cat another pastry.</p>
    </div>
    <div class="sticky bottom-0 left-0 w-full h-10 mask" />
  </div>
</template>

<style scoped>
.mask {
  background-image: radial-gradient(
    rgb(0, 0, 0, 0) 1px,
    rgb(255, 255, 255) 1px
  );
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
}
</style>

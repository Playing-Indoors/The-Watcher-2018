<template>
  <header class="relative bg-black p-4 text-center">
    <div
      v-if="$slots.left"
      class="absolute pin-l pin-y flex items-center pl-4"
    >
      <slot name="left" />
    </div>
    <slot />
    <div
      v-if="$slots.right"
      class="absolute pin-r pin-y flex items-center pr-4"
    >
      <slot name="right" />
    </div>
  </header>
</template>

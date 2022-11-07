<template>
  <div class="flex gap-8 items-center h-full -mx-6">
    <div class="flex-grow flex flex-col gap-8">
      <slot name="left" />
    </div>

    <div class="flex items-start w-72 h-1/2">
      <slot name="right" />
    </div>
  </div>
</template>

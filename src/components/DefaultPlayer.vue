<script setup lang="ts">
import { useStore } from "@/stores/Store";

const store = useStore();
</script>

<template>
  <div
    class="border-top border-[#282828] border-[1px] h-[90px] bg-[#181818] text-white shrink-0 flex items-center justify-center"
  >
    <audio
      ref="audio"
      class="w-full"
      :src="store.song"
      controls
      autoplay
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/Store";

const store = useStore();
</script>

<template>
  <div
    class="border-top border-[#282828] border-[1px] sm:h-[90px] h-[64px] bg-[#181818] text-white shrink-0 flex items-center justify-between sm:justify-center"
    v-if="store.song"
  >
    <div class="flex items-center justify-center sm:px-8 px-4">
      <div class="flex items-center justify-center mr-3">
        <img
          v-if="store.song.album"
          class="w-[36px] rounded h-[36px]"
          :src="store.song.album.images[0].url"
        />
      </div>

      <div class="flex flex-col">
        <h3 class="text-xs font-bold">{{ store.song.name }}</h3>
        <RouterLink
          :to="'/artist/' + store.song.artists[0].id"
          class="text-gray-400 text-xs"
          >{{ store.song.artists[0].name }}
        </RouterLink>
      </div>
    </div>
    <audio
      id="audio"
      ref="audio"
      class="w-full sm:block hidden"
      :src="store.song.preview_url"
      controls
      autoplay
    ></audio>
  </div>
</template>

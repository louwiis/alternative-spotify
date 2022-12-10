<script setup lang="ts">
import { useStore } from "@/stores/Store";
import { defineProps } from "vue";
import type { trackType } from "@/types/spotify";
import { RouterLink } from "vue-router";

const store = useStore();
defineProps<{
  track: trackType;
  index: number;
}>();

</script>

<template>
  <tr
    class="flex items-center sm:hover:bg-gray-500 h-[45px] rounded hover:bg-opacity-20"
    @click="store.setSong(track)"
  >
    <td class="text-gray-400 grow-0 text-[16px] sm:w-[48px] px-4">
      {{ index + 1 }}
    </td>

    <td class="grow-0" v-if="track?.album?.images?.url">
      <img :src="track?.album?.images[0]?.url" class="w-[40px] h-[40px] mr-4" />
    </td>

    <td class="grow">
      <h3
        class="sm:text-[16px] text-sm sm:max-w-[512px] max-w-[200px] h-[16px] text-ellipsis overflow-hidden font-bold"
      >
        {{ track?.name }}
      </h3>
      <RouterLink
        :to="'/artist/' + track.artists[0].id"
        class="text-gray-400 sm:text-[14px] text-sm"
        >{{ track.artists[0].name }}
      </RouterLink>
    </td>

    <td v-if="track?.duration_ms" class="text-gray-400 sm:block hidden grow-0">
      {{
        Math.floor(track?.duration_ms / 60000) +
        ":" +
        Math.floor((track?.duration_ms % 60000) / 1000)
      }}
    </td>
  </tr>
</template>

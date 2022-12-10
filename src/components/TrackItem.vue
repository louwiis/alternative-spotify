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
    class="flex items-center px-4 py-1 hover:bg-gray-500 rounded hover:bg-opacity-20"
    @click="store.setSong(track?.preview_url)"
  >
    <td class="sm:block hidden text-gray-400 grow-0 text-[16px] w-[48px] px-4">
      {{ index + 1 }}
    </td>

    <td class="grow">
      <h3
        class="text-[16px] max-w-[512px] text-ellipsis overflow-hidden font-bold"
      >
        {{ track?.name }}
      </h3>
      <RouterLink
        :to="'/artist/' + track.artists[0].id"
        class="text-gray-400 text-[14px]"
        >{{ track.artists[0].name }}
      </RouterLink>
    </td>

    <td v-if="track?.duration_ms" class="text-gray-400 grow-0">
      {{
        Math.floor(track?.duration_ms / 60000) +
        ":" +
        Math.floor((track?.duration_ms % 60000) / 1000)
      }}
    </td>
  </tr>
</template>

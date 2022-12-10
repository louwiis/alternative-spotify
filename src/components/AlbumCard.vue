<script setup lang="ts">
import { RouterLink, type Router } from "vue-router";
import { useStore } from "@/stores/Store";
import { defineProps } from "vue";
import type { AlbumType } from "@/types/spotify";

const store = useStore();
defineProps<{ album: AlbumType }>();
</script>

<template>
  <RouterLink
    :to="`/album/${album.id}`"
    class="hover:bg-[#242424] shrink-0 bg-[#181818] w-[185px] p-4 flex flex-col justify-center rounded-md gap-3"
  >
    <img
      :src="album.images[0].url"
      :alt="album.name"
      class="w-full rounded-md"
    />

    <div class="flex flex-col gap-1">
      <span
        class="overflow-hidden whitespace-nowrap overflow-ellipsis font-bold"
      >
        {{ album.name }}
      </span>
      <span class="text-gray-500 text-sm">
        {{ album.release_date.split("-")[0] + " • " }}
        <RouterLink :to="'/artist/' + album.artists[0].id">{{
          album.artists[0].name
        }}</RouterLink>
      </span>
    </div>
  </RouterLink>
</template>

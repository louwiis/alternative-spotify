<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import type { SearchAlbums } from "@/types/spotify";
import { useStore } from "@/stores/Store";
import AlbumCard from "@/components/AlbumCard.vue";

const store = useStore();
</script>

<template>
  <main class="flex flex-col py-6 px-8">
    <div v-if="store.albums.length !== 0" class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold">Result</h2>

      <ul class="flex flex-row flex-wrap gap-[24px]">
        <AlbumCard
          v-for="album in store.albums?.items"
          :key="album.id"
          :album="album"
        />
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/Store";
import AlbumCard from "@/components/AlbumCard.vue";

const store = useStore();
</script>

<template>
  <main class="py-6 px-8">
    <div v-if="store.history.length != 0">
      <h1 class="text-2xl font-bold mb-4">Recent searches</h1>

      <ul class="flex flex-row flex-wrap gap-[24px] overflow-x-scroll">
        <AlbumCard
          v-for="album in store.history"
          :key="album.id"
          :album="album"
        />
      </ul>
    </div>
  </main>
</template>

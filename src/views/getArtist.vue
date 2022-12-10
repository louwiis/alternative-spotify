<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { getArtist, getArtistTopTracks } from "@/api/spotify";
import type { artistType, topTracksType } from "@/types/spotify";
import TrackItem from "@/components/TrackItem.vue";

const { params } = useRoute();
const artistId = params.id as string;

const artist = ref<artistType | null>(null);
const topTracks = ref<topTracksType[] | null>(null);

const seeMore = ref(false);

async function init() {
  artist.value = await getArtist(artistId);
  topTracks.value = await getArtistTopTracks(artistId);
}

init();
</script>

<template>
  <main>
    <div class="flex sm:h-[300px] h-[360px] py-6 px-8 justify-end flex-col bg-gray-400">
      <h1 class="sm:text-8xl text-4xl font-bold mb-6">{{ artist?.name }}</h1>
      <span class="sm:block hidden">{{ artist?.followers.total }} followers</span>
    </div>

    <div class="py-6 px-8">
      <span class="sm:hidden block text-xs text-gray-400 mb-2">{{ artist?.followers.total }} followers</span>

      <h2 class="text-2xl font-bold mb-4">Popular</h2>

      <table class="w-full">
        <tbody class="w-full">
          <TrackItem
            v-for="(track, index) in topTracks?.tracks.slice(
              0,
              seeMore ? 10 : 5
            )"
            :key="track?.id"
            :track="track"
            :index="index"
          />
        </tbody>
      </table>

      <button
        class="text-xs text-gray-400 font-bold uppercase"
        @click="seeMore = !seeMore"
      >
        {{ seeMore ? "See less" : "See more" }}
      </button>
    </div>
  </main>
</template>

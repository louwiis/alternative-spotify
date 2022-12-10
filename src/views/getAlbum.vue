<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { ref } from "vue";
import { getAlbum, getArtist } from "@/api/spotify";
import type { albumType, artistType, trackType } from "@/types/spotify";
import { useStore } from "@/stores/Store";
import TrackItem from "@/components/TrackItem.vue";

// add song into store
const store = useStore();
const setSong = (song: trackType) => {
  store.setSong(song);
};

const { params } = useRoute();
const albumId = params.id as string;

const album = ref<albumType | null>(null);
const artist = ref<artistType | null>(null);

async function init() {
  album.value = await getAlbum(albumId);
  artist.value = await getArtist(album.value?.artists[0].id);

  store.addToHistory(album.value);
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}

function getTracksDuration(tracks: any) {
  let duration = 0;
  tracks.forEach((track: any) => {
    duration += track.duration_ms;
  });
  return (
    Math.floor(duration / 60000) +
    " min " +
    Math.floor((duration % 60000) / 1000) +
    " sec"
  );
}

init();
</script>

<template>
  <main class="py-6 px-8">
    <div class="flex items-end">
      <img
        class="md:w-[232px] w-[192px] h-[192px] md:h-[232px] mr-6"
        v-if="album?.images"
        :src="album?.images[0].url"
      />

      <div>
        <span class="text-xs font-bold">ALBUM</span>
        <h1
          class="md:text-[96px] text-[72px] leading-none font-bold mb-8 break-keep"
        >
          {{ album?.name }}
        </h1>

        <div class="text-[14px] flex items-center">
          <img
            class="w-[24px] h-[24px] rounded-full mr-2"
            :src="artist?.images[0].url"
          />

          <RouterLink
            :to="`/artist/${artist?.id}`"
            class="font-bold hover:underline"
          >
            {{ artist?.name }}
          </RouterLink>
          •
          <span v-if="album?.release_date">
            {{ getYear(album?.release_date) }}
          </span>
          •
          <span>
            {{ album?.total_tracks + " songs," }}
          </span>

          <span v-if="album?.tracks?.items" class="text-gray-400">
            {{ getTracksDuration(album?.tracks?.items) }}
          </span>
        </div>
      </div>
    </div>

    <table class="w-full">
      <thead class="w-full">
        <tr class="text-[14px] px-4 text-gray-400 flex items-center">
          <th class="px-4 py-4 grow-0">#</th>
          <th class="text-left grow">TITLE</th>
          <th class="grow-0 text-gray-400">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
              ></path>
              <path
                d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"
              ></path>
            </svg>
          </th>
        </tr>
      </thead>
      <tbody class="w-full">
        <TrackItem
          v-for="(track, index) in album?.tracks.items"
          :key="track?.id"
          :track="track"
          :index="index"
        />
      </tbody>
    </table>
  </main>
</template>

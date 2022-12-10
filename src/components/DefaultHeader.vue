<script setup lang="ts">
import { ref } from "vue";
import { getProfile } from "@/api/spotify";
import { useStore } from "@/stores/Store";
import type { userProfileType } from "@/types/spotify";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const setSearch = (event: any) => {
  console.log(event.target.value);
  store.searchAlbum(event.target.value);
};

const userProfile = ref<userProfileType | null>(null);
async function init() {
  try {
    userProfile.value = await getProfile();
  } catch (error) {
    router.push("/login");
    console.log(error);
  }
}

init();
</script>

<template>
  <header
    class="flex flex-row items-center justify-between px-8 py-[12px] shrink-0 sm:h-[64px]"
  >
    <div class="flex flex-col w-full">
      <div class="flex justify-between w-full">
        <div class="flex gap-3 items-center">
          <div
            v-if="store.pageName !== 'search'"
            class="text-white bg-black rounded-full h-8 w-8 text-sm cursor-pointer flex justify-center items-center"
            @click="
              () => {
                store.setNextPage(store.pageUrl);
                router.push(store.previousPageUrl);
              }
            "
          >
            <svg
              fill="currentColor"
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path
                d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"
              ></path>
            </svg>
          </div>

          <div
            class="text-white bg-black rounded-full h-8 w-8 text-sm cursor-pointer justify-center items-center md:flex hidden"
            @click="
              () => {
                router.push(store.nextPageUrl);
              }
            "
          >
            <svg
              fill="currentColor"
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path
                d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"
              ></path>
            </svg>
          </div>

          <div v-if="store.pageName == 'search'">
            <h2 class="sm:hidden flex text-white text-2xl font-bold">Search</h2>
            <input
              type="text"
              placeholder="Search for an artist, album or playlist"
              class="sm:block hidden rounded-full px-[40px] w-[320px] py-[10px] placeholder:text-gray-500 text-sm"
              @input="setSearch($event)"
            />
          </div>
        </div>

        <div
          v-if="userProfile"
          class="text-white flex flex-row ml-4 items-center gap-2 bg-black rounded-3xl p-[2px] md:w-[180px]"
        >
          <div
            class="bg-gray-500 w-7 h-7 flex justify-center items-center rounded-full"
          >
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"
              ></path>
            </svg>
          </div>

          <span class="font-bold truncate text-sm md:flex hidden">{{
            userProfile?.display_name
          }}</span>

          <div class="mr-2 md:flex hidden">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path fill="currentColor" d="M14 6l-6 6-6-6h12z"></path>
            </svg>
          </div>
        </div>
      </div>

      <input
        v-if="store.pageName == 'search'"
        type="text"
        placeholder="Search for an artist, album or playlist"
        class="sm:hidden rounded-lg px-[40px] mt-4 py-[10px] placeholder:text-gray-500 text-sm"
        @input="setSearch($event)"
      />
    </div>
  </header>
</template>

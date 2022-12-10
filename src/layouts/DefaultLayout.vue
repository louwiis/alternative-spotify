<script setup lang="ts">
import { RouterView } from "vue-router";

import Sidebar from "@/components/DefaultSidebar.vue";
import Header from "@/components/DefaultHeader.vue";
import Player from "@/components/DefaultPlayer.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="flex flex-1 overflow-hidden">
      <div class="">
        <Sidebar class="w-[241px]" />
      </div>
      <div class="grow flex bg-[#121212] flex-col">
        <Header class="h-[64px]" />
        <RouterView
          class="grow text-white overflow-y-auto"
        />
      </div>
    </div>
    <Player class="h-[90px]" />
  </div>
</template>

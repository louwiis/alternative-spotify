<script setup lang="ts">
import { RouterView } from "vue-router";

import Sidebar from "@/components/DefaultSidebar.vue";
import Header from "@/components/DefaultHeader.vue";
import Player from "@/components/DefaultPlayer.vue";
import MobileNav from "@/components/DefaultMobileNav.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="flex flex-1 overflow-hidden">
      <div class="">
        <Sidebar class="sm:block hidden w-[241px]" />
      </div>
      <div class="grow flex bg-[#121212] flex-col">
        <Header />
        <RouterView class="grow text-white overflow-y-auto" />
      </div>
    </div>
    <Player class="h-[90px]" />
    <MobileNav class="sm:hidden block shrink-0" />
  </div>
</template>

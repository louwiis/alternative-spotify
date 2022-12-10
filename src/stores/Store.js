import { defineStore } from "pinia";
import { search } from "@/api/spotify";

export const useStore = defineStore("store", {
  state: () => {
    return {
      song: null,
      albums: [],
      history: [],

      pageUrl: null,
      pageName: null,
      previousPageUrl: null,
      nextPageUrl: null,
    };
  },
  actions: {
    setSong(song) {
      this.song = song;
    },

    async searchAlbum(q) {
      if (q.length > 0) {
        await search(q, "album").then((res) => {
          this.albums = res.albums;
        });
      } else {
        this.albums = [];
      }
    },

    addToHistory(song) {
      this.history.unshift(song);

      this.history = this.history.filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      );

      this.history = this.history.slice(0, 6);
    },

    setPage(url) {
      this.pageUrl = url;
    },

    setPageName(name) {
      this.pageName = name;
    },

    setPreviousPage(url) {
      this.previousPageUrl = url;
    },

    setNextPage(url) {
      this.nextPageUrl = url;
    },
  },
});

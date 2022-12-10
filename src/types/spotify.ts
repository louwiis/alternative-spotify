export type searchAlbumsType = {
  items: {
    album: albumType[];
  };
};

// artists is an object with multiple artists in it
export type albumType = {
  id: string;
  album_type: string;
  artists: {
    items: artistType[];
  },
  images: imageType[];
  name: string;
  total_tracks: number;
  release_date: string;
  tracks: {
    items: trackType[];
  };
} | null;

export type artistType = {
  id: string;
  name: string;
  images: imageType[];
  genres: string[];
  followers: {
    total: number;
  };
};

export type topTracksType = {
  tracks: {
    items: trackType[];
  };
};

export type imageType = {
  height: number;
  url: string;
  width: number;
};

export type trackType = {
  id: string;
  name: string;
  duration_ms: number;
  explicit: boolean;
  preview_url: string;
  track_number: number;
  artists: artistType[];
};

export type userProfileType = {
  id: string;
  display_name: string;
  images: imageType[];
  country: string;
  product: string;
  email: string;
  followers: {
    total: number;
  };
};

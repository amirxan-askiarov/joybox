import type { MediaItemType } from "../utils/types";

export const mediaItemsMetaData: Record<
  Partial<MediaItemType>,
  {
    url: string;
    mediaItemType: MediaItemType;
    hasNewReleases: boolean;
  }
> = {
  Movies: {
    url: "/movies/movies-info.json",
    mediaItemType: "Movies",
    hasNewReleases: true,
  },
  "TV Shows": {
    url: "/tv-shows/tv-shows-info.json",
    mediaItemType: "TV Shows",
    hasNewReleases: true,
  },
  Streams: {
    url: "/streams/streams-info.json",
    mediaItemType: "Streams",
    hasNewReleases: false,
  },
  "Online Games": {
    url: "/games/games-info.json",
    mediaItemType: "Online Games",
    hasNewReleases: true,
  },
};

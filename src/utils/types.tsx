type ImageLinks = "avif" | "webp" | "jpeg" | "svg" | "png"; // svg and png are additional

export type MediaItemType = "Movies" | "TV Shows" | "Streams" | "Online Games";

export type MediaItemCategory = string;

export interface MediaItem {
  title: string;
  type: MediaItemType;
  category: string;
  description: string;
  "age-restriction"?: string;
  link: string;
}

export interface MediaItemProcessed {
  title: string;
  type: MediaItemType;
  category: string;
  description: string;
  "age-restriction"?: string;
  links: Partial<Record<ImageLinks, string>>;
}

export type MediaItemsByType = Partial<
  Record<MediaItemType, MediaItemProcessed[]>
>;

export type MediaItemsByCategory = Partial<
  Record<MediaItemCategory, MediaItemProcessed[]>
>;

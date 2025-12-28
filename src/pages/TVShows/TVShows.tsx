import type { MediaItemType } from "../../utils/types.tsx";

import MediaTypeLayout from "../../layouts/MediaTypeLayout/MediaTypeLayout.tsx";

const mediaItemsType: MediaItemType = "TV Shows";

const TVShows: React.FC = () => (
  <MediaTypeLayout mediaItemsType={mediaItemsType} />
);

export default TVShows;

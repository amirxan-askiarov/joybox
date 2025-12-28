import type { MediaItemType } from "../../utils/types.tsx";

import MediaTypeLayout from "../../layouts/MediaTypeLayout/MediaTypeLayout.tsx";

const mediaItemsType: MediaItemType = "Movies";

const Movies: React.FC = () => (
  <MediaTypeLayout mediaItemsType={mediaItemsType} />
);

export default Movies;

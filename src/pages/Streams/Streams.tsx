import type { MediaItemType } from "../../utils/types.tsx";

import MediaTypeLayout from "../../layouts/MediaTypeLayout/MediaTypeLayout.tsx";

const mediaItemsType: MediaItemType = "Streams";

const Streams: React.FC = () => (
  <MediaTypeLayout mediaItemsType={mediaItemsType} />
);

export default Streams;

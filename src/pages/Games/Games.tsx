import type { MediaItemType } from "../../utils/types.tsx";

import MediaTypeLayout from "../../layouts/MediaTypeLayout/MediaTypeLayout.tsx";

const mediaItemsType: MediaItemType = "Online Games";

const Games: React.FC = () => (
  <MediaTypeLayout mediaItemsType={mediaItemsType} />
);

export default Games;

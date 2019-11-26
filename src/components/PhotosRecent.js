import React from "react";
import propTypes from "prop-types";
import ImageCard from "./ImageCard/ImageCard";
import { FlexboxGrid } from "rsuite";

function PhotosRecent({ recentPhotos }) {
  return (
    <div>
      <h1>Последние фото</h1>
      <FlexboxGrid>
        {recentPhotos.map((p, k) => (
          <ImageCard
            key={k}
            src={p.src.tiny}
            srcLandscape={p.src.landscape}
            photographer={p.photographer}
            photographer_url={p.photographer_url}
          />
        ))}
      </FlexboxGrid>
    </div>
  );
}

PhotosRecent.propTypes = {
  recentPhotos: propTypes.array.isRequired
};

export default PhotosRecent;

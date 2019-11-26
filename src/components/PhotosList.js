import React, { Fragment } from "react";
import propTypes from "prop-types";
import ImageCard from "./ImageCard/ImageCard";

function PhotosList({ photos, searchInput }) {
  return (
    <Fragment>
      {photos.length > 0 ? (
        <div>
          <h1>Результаты поиска "{searchInput}":</h1>
          {photos.map((p, k) => (
            <ImageCard
              src={p.src.tiny}
              srcLandscape={p.src.landscape}
              key={k}
              photographer={p.photographer}
              photographer_url={p.photographer_url}
            />
          ))}
        </div>
      ) : null}
    </Fragment>
  );
}

PhotosList.propTypes = {
  photos: propTypes.array.isRequired,
  searchInput: propTypes.string.isRequired
};

export default PhotosList;

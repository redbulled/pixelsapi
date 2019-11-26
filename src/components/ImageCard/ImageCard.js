import React from "react";
import propTypes from "prop-types";
import { Panel, Icon } from "rsuite";
import "./ImageCard.css";

function ImageCard({ src, srcLandscape, photographer, photographer_url }) {
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", margin: "10px", width: "200px" }}
    >
      <img src={src} alt="" className="img-prev" />
      {/*<img src={src} alt="" height={100} />*/}
      <Panel>
        <small>Фотограф</small> <a href={photographer_url}>{photographer}</a>
        <br />
        <Icon icon="file-download" /> <a href={srcLandscape}>Скачать</a>
      </Panel>
    </Panel>
  );
}

ImageCard.propTypes = {
  src: propTypes.string.isRequired,
  srcLandscape: propTypes.string.isRequired,
  photographer: propTypes.string.isRequired,
  photographer_url: propTypes.string.isRequired
};

export default ImageCard;

import React, { Fragment } from "react";
import propTypes from "prop-types";
import { Input } from "rsuite";

function SearchInput({ value, onChangeInput }) {
  return (
    <Fragment>
      <Input
        style={{ width: 300 }}
        value={value}
        onChange={onChangeInput}
        placeholder="Что ищем? (англ.)"
        classPrefix="inline-block input-search"
      />
    </Fragment>
  );
}

SearchInput.propTypes = {
  value: propTypes.string.isRequired,
  onChangeInput: propTypes.func.isRequired
};

export default SearchInput;

import PropTypes from 'prop-types';
import React from 'react';

import GridCell from './grid-cell.js';
import styles from './column-header.css';

export default function ColumnHeader(props) {
  return (
    <GridCell
      className={props.className}
      idX={props.idX}
      idY={props.idY}
      role="columnheader"
    >
      {props.children}
    </GridCell>
  );
}

ColumnHeader.defaultProps = {
  className: styles.container,
};

ColumnHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  idX: PropTypes.number.isRequired,
  idY: PropTypes.number.isRequired,
};

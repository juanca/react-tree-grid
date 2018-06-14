import React from 'react';

import Row from './row.js';
import FootingsGrid from './footings-grid.js';
import GridCell from './grid-cell.js';
import HeadingsGrid from './headings-grid.js';
import PropTypeColumns from './prop-types/columns.js';
import PropTypeData from './prop-types/data.js';
import styles from './tree-grid.css'

export default function TreeGrid(props) {
  return (
    <div
      className={styles.container}
      role="grid"
    >
      <HeadingsGrid columns={props.columns} />
      {props.data.map(datum =>
        <Row
          key={datum.id}
        >
          {props.columns.map(column =>
            <GridCell
              className={column.className}
              key={column.id}
            >
              {column.renderNode(datum)}
            </GridCell>
          )}
        </Row>
      )}
      <FootingsGrid columns={props.columns} />
    </div>
  );
};

TreeGrid.defaultProps = {
  columns: [],
  data: [],
};

TreeGrid.propTypes = {
  columns: PropTypeColumns,
  data: PropTypeData,
};

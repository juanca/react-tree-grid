import React from 'react';
import {
  ColumnHeader,
  Grid,
  Row,
  RowHeaders,
} from '../grid';
import FancyInputGridCell from '../examples/grid-cells/fancy-input-grid-cell.js';

import data from './data.js';
import styles from './styles.css';

const columns = Object.keys(data[0]);

function createGridRefs() {
  return [0].concat(data).map(() => columns.map(() => React.createRef()));
}

export default function Grid3() {
  return (
    <Grid className={styles['grid-3-container']} gridRefs={createGridRefs()}>
      <RowHeaders className={styles['row-headers']} key="row-headers">
        {columns.map(column => (
          <ColumnHeader
            className={column.columnHeaderClassName}
            key={column.id}
            idX={column.id}
            idY={0}
          >
            {column}
          </ColumnHeader>
        ))}
      </RowHeaders>
      {data.map(datum => (
        <Row key={datum.id}>
          {columns.map(column => (
            <FancyInputGridCell
              defaultValue={datum[column].toString()}
              key={column.id}
              idX={column.id}
              idY={datum.id}
            />
          ))}
        </Row>
      ))}
    </Grid>
  );
}

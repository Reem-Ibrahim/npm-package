import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows= [
  { id: 1, col1: 'Hello', col2: 'Worlddddd' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesomeeeeee' },
  { id: 3, col1: 'MUI', col2: 'is Amazinggggggg' },
];

const columns= [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export function RmiTable() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

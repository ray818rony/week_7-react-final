import * as React from 'react';
import { DataGrid, GridColDef,GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api/server'; // ADD THIS
import { useGetData } from '../CustomHooks'; // ADD THIS
import {
  Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'; // ADD THESE

import {MarvelForm} from '../MarvelForm/MarvelForm';


interface gridData {
  data: {
    id?: string;
  }
}
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'Hero Name', headerName: 'Hero Name', width: 200 },
  { field: 'Ability', headerName: 'Ability', width: 200 },
  {
    field: 'Series',
    headerName: 'Origin',
    type: 'number',
    width: 130,

  },
  { field: 'Color', headerName: 'Color', width: 200 },
  { field: 'Villains', headerName: 'Villains', width: 200 },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: ValueGetterParams) =>
  //       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  //   },
];


export const DataTable = () => {

  let { heroData, getData } = useGetData();
  let [open, setOpen] = React.useState(false);
  let [gridData, setData] = React.useState<gridData>({ data: {} })

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }
  console.log(gridData.data.id)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Heroes Inventory</h2>
      <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection onRowSelected={setData} />

      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

      {/*Dialog Pop Up begin */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Heroes</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Hero</DialogContentText>
          <MarvelForm id={gridData.data.id!} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
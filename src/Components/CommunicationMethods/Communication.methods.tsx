import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store.ts"; // Import your RootState type
import { deleteMethod } from "../../features/company/communicationSlice.ts";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MethodForm from "./CommunicationMethodFormList.tsx";


interface CommunicationMethod {
  id: number;
  name: string;
  description: string;
  sequence: number;
  mandatory: boolean;
}
interface MethodListProps {
  onEdit: (method: CommunicationMethod) => void;
}
 
const MethodList: React.FC = () => {
    const column=useSelector((state:RootState)=>state.communication.column)
  const methods = useSelector(
    (state: RootState) => state.communication.communicationMethods
  );
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteMethod(id));
  };
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    
    <div className="column middle">
      <h4>Communication Management</h4>
      <div>
        <button className="button-Add" onClick={handleClickOpen} >
          Create Communication Method
        </button>

        <>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={methods}
              columns={column}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
            <MethodForm
              handleClickOpen={handleClickOpen}
              setOpen={setOpen}
              handleClose={handleClose}
              open={open}
            />
          </Box>
        </>
      </div>
    </div>
  );
}

export default MethodList;

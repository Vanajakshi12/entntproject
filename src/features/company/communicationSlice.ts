import { GridColDef } from "@mui/x-data-grid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommunicationMethod {
  id: number;
  name: string;
  description: string;
  sequence: number;
  mandatory: boolean;
}
interface ICommunication {
  communicationMethods: CommunicationMethod[];
  column: GridColDef[];
}

const initialState: ICommunication = {
  communicationMethods: [
    {
      id: 1,
      name: "LinkedIn Post",
      description: "Post on LinkedIn",
      sequence: 1,
      mandatory: true,
    },
    {
      id: 2,
      name: "LinkedIn Message",
      description: "Message on LinkedIn",
      sequence: 2,
      mandatory: true,
    },
    {
      id: 3,
      name: "Email",
      description: "Send an email",
      sequence: 3,
      mandatory: true,
    },
    {
      id: 4,
      name: "Phone Call",
      description: "Make a phone call",
      sequence: 4,
      mandatory: false,
    },
    {
      id: 5,
      name: "Other",
      description: "Other methods",
      sequence: 5,
      mandatory: false,
    },
  ],
  column: [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "sequence",
      headerName: "Sequence",
      width: 150,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 240,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 240,
      editable: true,
    },
    {
      field: "mandatory",
      headerName: "Mandatory",
      width: 240,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      editable: true,
    },
  ],
};

const communicationMethodsSlice = createSlice({
  name: "communicationMethods",
  initialState,
  reducers: {
    addMethod: (state, action: PayloadAction<CommunicationMethod>) => {
      state.communicationMethods.push(action.payload);
    },
    updateMethod: (state, action: PayloadAction<CommunicationMethod>) => {
      const index = state.communicationMethods.findIndex(
        (method) => method.id === action.payload.id
      );
      if (index !== -1) state.communicationMethods[index] = action.payload;
    },
    deleteMethod: (state, action: PayloadAction<number>) => {
      state.communicationMethods.filter(
        (method) => method.id !== action.payload
      );
    },
    communicationGridList: (state, action: any) => {
      state.communicationMethods = { ...state.communicationMethods };
    },
  },
});

export const { addMethod, updateMethod, deleteMethod, communicationGridList } =
  communicationMethodsSlice.actions;
export const communicationReducer = communicationMethodsSlice.reducer;

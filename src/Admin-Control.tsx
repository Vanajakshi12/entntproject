// import { Box, withTheme } from "@mui/material";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import * as React from "react";

// import { UseDispatch, useSelector } from "react-redux";
// import { RootState } from "./app/store.ts";
// import FullScreenDialog from "./Components/ComapanyManagement/FullScreenDialog.tsx";
// import "./Admin.Control.css";
// export default function AdminControl() {
//   const companiesList = useSelector(
//     (state: RootState) => state.company.companies
//   );
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 50 },
//     {
//       field: "name",
//       headerName: "Company Name",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "location",
//       headerName: "Location",
//       width: 140,
//       editable: true,
//     },
//     {
//       field: "linkedInProfile",
//       headerName: "LinkedIn Profile",
//       width: 100,
//       editable: true,
//       renderCell: (params) => (
//         <a href={params.value} target="_blank" rel="noopener noreferrer">
//           {params.value}
//         </a>
//       ),
//     },
//     {
//       field: "emails",
//       headerName: "Emails",
//       width: 200,
//       editable: true,
//     },
//     {
//       field: "phoneNumbers",
//       headerName: "Phone Numbers",
//       width: 135,
//       editable: true,
//     },
//     {
//       field: "comments",
//       headerName: "Comments",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "communicationPeriodicity",
//       headerName: "Communication Periodicity",
//       width: 220,
//       editable: true,
//     },
//   ];

//   return (
//     <div className="column middle" style={{ backgroundColor: "white" }}>
//       <h4>Company Management</h4>
//       <div>
//         <button className="button-Add" onClick={handleClickOpen}>
//           Create Company
//         </button>

//         <>
//           {" "}
//           <Box sx={{ height: 400, width: "100%" }}>
//             <DataGrid
//               rows={companiesList}
//               columns={columns}
//               initialState={{
//                 pagination: {
//                   paginationModel: {
//                     pageSize: 5,
//                   },
//                 },
//               }}
//               pageSizeOptions={[5]}
//               checkboxSelection
//               disableRowSelectionOnClick
//             />
//             <FullScreenDialog
//               handleClickOpen={handleClickOpen}
//               setOpen={setOpen}
//               handleClose={handleClose}
//               open={open}
//             />
//           </Box>
//         </>
//       </div>
//     </div>
//   );
// }

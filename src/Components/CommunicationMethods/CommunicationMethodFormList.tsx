import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addMethod,
  updateMethod,
} from "../../features/company/communicationSlice";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Communication.methods.css"

import { TransitionProps } from "@mui/material/transitions";
const MethodForm = (props: any) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sequence: "",
    mandatory: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // const { name, value, type, checked } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: type === "checkbox" ? checked : value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (currentMethod) {
    //   dispatch(updateMethod({ ...formData, id: currentMethod.id }));
    // } else {
    //   dispatch(addMethod({ ...formData, id: Date.now() }));
    // }
    // onClose();
  };
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <div className="container">
        <Dialog
          fullScreen
          open={props.open}
          onClose={props.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={props.handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <h1>Add Communication Method</h1>
              </Typography>
            </Toolbar>
          </AppBar>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Sequence:</label>
              <input
                type="number"
                name="sequence"
                value={formData.sequence}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>
                <input
                className="checkbox-enabled"
                  type="checkbox"
                  name="mandatory"
                  checked={formData.mandatory}
                  onChange={handleChange}
                />
                Mandatory
              </label>
            </div>
            <button className="button-company" type="submit">
              Save
            </button>
            <button
              className="button-company"
              type="button"
              onClick={props.handleClose}
            >
              Cancel
            </button>
          </form>
        </Dialog>
      </div>
    </>
  );
};

export default MethodForm;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMethod } from "../../features/company/communicationSlice.ts";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Communication.methods.css";

import { TransitionProps } from "@mui/material/transitions";
import { RootState } from "../../app/store";

const MethodForm = (props: any) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sequence, setSequence] = useState(0);
  const [mandatory, setMandatory] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const methods = useSelector(
    (state: RootState) => state.communication.communicationMethods
  );

  const validateSpaces = (value: string): boolean => {
    return value.trim() === value && value.trim() !== "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!validateSpaces(name)) {
      setError("Name cannot be empty, contain only spaces, or start/end with spaces.");
      return;
    }
    if (!validateSpaces(description)) {
      setError("Description cannot be empty, contain only spaces, or start/end with spaces.");
      return;
    }
    if (sequence < 0) {
      setError("Sequence must be a non-negative number.");
      return;
    }

    setError(null);

    // Dispatch action to add a method
    dispatch(
      addMethod({
        id: methods.length + 1,
        name,
        description,
        sequence,
        mandatory,
      })
    );

    // Reset form and close dialog
    props.handleClose();
    setName("");
    setDescription("");
    setSequence(0);
    setMandatory(false);
  };

 
  return (
    
      <div>
        <Dialog
          fullScreen
          open={props.open}
          onClose={props.handleClose}
          // TransitionComponent={Transition}
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
                className="input-field"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {!validateSpaces(name) && (
                <span className="error-text">
                  Name cannot be empty, contain only spaces, or start/end with spaces.
                </span>
              )}
            </div>
            <div>
              <label>Description:</label>
              <input
                type="text"
                className="input-field"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              {!validateSpaces(description) && (
                <span className="error-text">
                  Description cannot be empty, contain only spaces, or start/end with spaces.
                </span>
              )}
            </div>
            <div>
              <label>Sequence:</label>
              <input
                type="number"
                className="input-field"
                name="sequence"
                value={sequence}
                onChange={(e) => setSequence(Number(e.target.value))}
                required
              />
              {sequence < 0 && (
                <span className="error-text">Sequence must be a non-negative number.</span>
              )}
            </div>
            <div>
              <label>
                <input
                  className="checkbox-enabled"
                  type="checkbox"
                  name="mandatory"
                  checked={mandatory}
                  onChange={(e) => setMandatory(e.target.checked)}
                />
                Mandatory
              </label>
            </div>
            {error && <div className="error-text">{error}</div>}
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
    
  );
};

export default MethodForm;

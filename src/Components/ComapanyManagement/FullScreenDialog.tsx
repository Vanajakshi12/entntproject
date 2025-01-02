import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import "./Formcontainer.css";
import {
  addCompany,
  editCompany,
} from "../../features/company/companySlice.ts";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface passProps {
  handleClickOpen: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  open: boolean;
  companyToEdit?: {
    id: number;
    name: string;
    location: string;
    linkedInProfile: string;
    emails: any;
    phoneNumbers: any;
    comments: string;
    communicationPeriodicity: string;
  };
}
const FullScreenDialog = (props: passProps) => {
  // const CompanyForm: React.FC<CompanyFormProps> = ({ companyToEdit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [emails, setEmails] = useState<any>("");
  const [phoneNumbers, setPhoneNumbers] = useState<any>("00000-00000");
  const [comments, setComments] = useState("");
  const [communicationPeriodicity, setCommunicationPeriodicity] = useState("");

  const dispatch = useDispatch();
  const companiesCount = useSelector(
    (state: RootState) => state.company.companiesCount
  );
  useEffect(() => {
    if (props.companyToEdit) {
      setName(props.companyToEdit.name);
      setLocation(props.companyToEdit.location);
      setLinkedInProfile(props.companyToEdit.linkedInProfile);
      setEmails(props.companyToEdit.emails);
      setPhoneNumbers(props.companyToEdit.phoneNumbers);
      setComments(props.companyToEdit.comments);
      setCommunicationPeriodicity(props.companyToEdit.communicationPeriodicity);
    }
  }, [props.companyToEdit]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return; // Don't submit if validation fails
    } else {
      const company = {
        id: props.companyToEdit ? props.companyToEdit.id : companiesCount + 1,
        name,
        location,
        linkedInProfile,
        emails,
        phoneNumbers,
        comments,
        communicationPeriodicity,
      };
      if (props.companyToEdit) {
        dispatch(editCompany(company));
        props.handleClose(); // Edit existing company
      } else {
        dispatch(addCompany(company));
        // Add new company
      }
      // Reset form fields
      // setName("");
      // setLocation("");
      // setLinkedInProfile("");
      // setEmails("");
      // setPhoneNumbers("");
      // setComments("");
      // setCommunicationPeriodicity("");
      props.handleClose();
    }
  };
  const [errors, setErrors] = useState({
    name: "",
    location: "",
    linkedInProfile: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    communicationPeriodicity: "",
  });
  const validate = () => {
    let formIsValid = true;
    const errors: any = {};

    if (!name) {
      formIsValid = false;
      errors.name = "Company name is required.";
    }

    if (!location) {
      formIsValid = false;
      errors.location = "Location is required.";
    }

    if (
      !linkedInProfile ||
      !/^https?:\/\/[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+/.test(linkedInProfile)
    ) {
      formIsValid = false;
      errors.linkedinProfile = "Please provide a valid LinkedIn URL.";
    }

    if (!emails || !/\S+@\S+\.\S+/.test(emails)) {
      formIsValid = false;
      errors.emails = "Please provide a valid email address.";
    }

    if (!phoneNumbers || !/^\d{10}$/.test(phoneNumbers)) {
      formIsValid = false;
      errors.phoneNumbers = "Please provide a valid phone number.";
    }

    if (!comments) {
      formIsValid = false;
      errors.comments = "Comments cannot be empty.";
    }

    if (!communicationPeriodicity) {
      formIsValid = false;
      errors.communicationPeriodicity =
        "Communication Periodicity is required.";
    }

    setErrors(errors);
    return formIsValid;
  };
  return (
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
              <h1>
                {props.companyToEdit ? "Edit Company" : "Add New Company"}
              </h1>
            </Typography>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Company Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Company Name"
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              required
            />
            {errors.location && (
              <span className="error">{errors.location}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="linkedinProfile">LinkedIn Profile</label>
            <input
              id="linkedinProfile"
              value={linkedInProfile}
              onChange={(e) => setLinkedInProfile(e.target.value)}
              placeholder="LinkedIn Profile"
              required
            />
            {errors.linkedInProfile && (
              <span className="error">{errors.linkedInProfile}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="emails">Emails</label>
            <input
              id="emails"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              placeholder="Email Address"
              required
            />
            {errors.emails && <span className="error">{errors.emails}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="phoneNumbers">Phone Numbers</label>
            <input
              id="phoneNumbers"
              value={phoneNumbers}
              onChange={(e) => setPhoneNumbers([e.target.value])}
              placeholder="Phone Numbers"
              required
            />
            {errors.phoneNumbers && (
              <span className="error">{errors.phoneNumbers}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Additional comments"
              required
            />
            {errors.comments && (
              <span className="error">{errors.comments}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="communicationPeriodicity">
              Communication Periodicity
            </label>
            <input
              id="communicationPeriodicity"
              value={communicationPeriodicity}
              onChange={(e) => setCommunicationPeriodicity(e.target.value)}
              placeholder="Every 2 weeks"
              required
            />
            {errors.communicationPeriodicity && (
              <span className="error">{errors.communicationPeriodicity}</span>
            )}
          </div>
          <button  type="submit" className="button-company">
            {props.companyToEdit ? "Edit Company" : "Save Company"}
          </button>
        </form>
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;

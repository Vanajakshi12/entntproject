import "./dashboard.css";
import * as moment from "moment";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

type Company = {
  name: string;
  lastCommunications: Communication[];
  nextScheduled: Communication;
};
type Communication = {
  type: string;
  date: string;
};

const companies: Company[] = [
  {
    name: "Company A",
    lastCommunications: [
      { type: "LinkedIn Post", date: "09/05/2024" },
      { type: "Email", date: "09/02/2024" },
      { type: "Call", date: "08/28/2024" },
      { type: "Meeting", date: "08/15/2024" },
      { type: "LinkedIn Post", date: "08/05/2024" },
    ],
    nextScheduled: { type: "LinkedIn Post", date: "09/10/2024" },
  },
  {
    name: "Company B",
    lastCommunications: [
      { type: "Email", date: "09/01/2024" },
      { type: "LinkedIn Post", date: "08/25/2024" },
      { type: "Call", date: "08/22/2024" },
      { type: "Email", date: "08/20/2024" },
      { type: "Meeting", date: "08/18/2024" },
    ],
    nextScheduled: { type: "Email", date: "09/05/2024" },
  },
  {
    name: "Company C",
    lastCommunications: [
      { type: "Call", date: "09/03/2024" },
      { type: "LinkedIn Post", date: "08/30/2024" },
      { type: "Email", date: "08/25/2024" },
      { type: "Meeting", date: "08/19/2024" },
      { type: "Call", date: "08/10/2024" },
    ],
    nextScheduled: { type: "Meeting", date: "09/12/2024" },
  },

  {
    name: "Company D",
    lastCommunications: [
      { type: "Email", date: "10/12/2024" },
      { type: "LinkedIn Post", date: "10/05/2024" },
      { type: "Call", date: "09/28/2024" },
      { type: "Meeting", date: "09/18/2024" },
      { type: "Email", date: "09/10/2024" },
    ],
    nextScheduled: { type: "Call", date: "10/15/2024" },
  },
  {
    name: "Company E",
    lastCommunications: [
      { type: "LinkedIn Post", date: "09/30/2024" },
      { type: "Email", date: "09/25/2024" },
      { type: "Call", date: "09/18/2024" },
      { type: "Meeting", date: "09/10/2024" },
      { type: "LinkedIn Post", date: "09/01/2024" },
    ],
    nextScheduled: { type: "Email", date: "10/07/2024" },
  },
  {
    name: "Company F",
    lastCommunications: [
      { type: "Meeting", date: "09/22/2024" },
      { type: "Call", date: "09/15/2024" },
      { type: "LinkedIn Post", date: "09/09/2024" },
      { type: "Email", date: "09/05/2024" },
      { type: "Call", date: "08/28/2024" },
    ],
    nextScheduled: { type: "LinkedIn Post", date: "10/02/2024" },
  },
];

function isDateCrossed(givenDate, format = "MM/DD/YYYY") {
  // Parse the given date using Moment.js
  const parsedDate = moment(givenDate, format);

  // Get today's date without time
  const today = moment().startOf("day");

  // Compare the parsed date with today's date
  return parsedDate.isBefore(today);
}

export default function dashboard() {
  return (
    <>
      <div className="row">
        <div className="column side">
          <>
            <Button className="dashboard-buttons">Company DashBoard</Button>
          </>
        </div>

        <div className="column middle">
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {companies.map((x: Company) => (
              <Grid key={x.name} size={{ xs: 2, sm: 4, md: 4 }}>
                <Card
                  className="card-dashboard-company"
                  sx={{ maxWidth: 345, WebkitBorderBottomRightRadius: 30 }}
                >
                  <CardMedia />
                  <CardContent style={{ backgroundColor: "#5b4e4e7a" }}>
                    {" "}
                    <Typography gutterBottom variant="h5" component="div">
                      {x.name}
                    </Typography>
                    {x.lastCommunications.map((x: Communication) => (
                      <div style={{ display: "flex" }}>
                        <p>{x.type + ":"} </p> <p>{x.date}</p>
                      </div>
                    ))}
                    <button
                      className={
                        isDateCrossed(x.nextScheduled.date)
                          ? "button-card delayed-color"
                          : "button-card sheduled-color"
                      }
                    >
                      Next Scheduled Communication:
                      <br />
                      <span>
                        {x.nextScheduled.type}: {x.nextScheduled.date}
                      </span>{" "}
                    </button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

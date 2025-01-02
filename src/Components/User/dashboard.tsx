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
  Id: number;
  name: string;
  lastCommunications: Communication[];
  nextScheduledCommunication: Communication;
};
type Communication = {
  type: string;
  date: string;
};

const companies: Company[] = [
  {
    "Id": 1,
    "name": "TechCorp",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-12-15" },
      { "type": "Email", "date": "2023-12-20" },
      { "type": "Phone Call", "date": "2023-12-25" },
      { "type": "LinkedIn Message", "date": "2023-12-30" },
      { "type": "Email", "date": "2024-01-05" }
    ],
    "nextScheduledCommunication": { "type": "Phone Call", "date": "2024-01-10" }
  },
  {
    "Id": 2,
    "name": "Innovate Inc",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-12-01" },
      { "type": "LinkedIn Message", "date": "2023-12-05" },
      { "type": "Phone Call", "date": "2023-12-10" },
      { "type": "Email", "date": "2023-12-15" },
      { "type": "LinkedIn Post", "date": "2023-12-20" }
    ],
    "nextScheduledCommunication": { "type": "Email", "date": "2024-01-01" }
  },
  {
    "Id": 3,
    "name": "HealthPlus",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-11-20" },
      { "type": "Email", "date": "2023-11-25" },
      { "type": "Phone Call", "date": "2023-11-30" },
      { "type": "LinkedIn Message", "date": "2023-12-05" },
      { "type": "Email", "date": "2023-12-10" }
    ],
    "nextScheduledCommunication": { "type": "LinkedIn Post", "date": "2024-01-05" }
  },
  {
    "Id": 4,
    "name": "EduLearn",
    "lastCommunications": [
      { "type": "Phone Call", "date": "2023-12-10" },
      { "type": "Email", "date": "2023-12-15" },
      { "type": "LinkedIn Message", "date": "2023-12-20" },
      { "type": "Survey", "date": "2023-12-25" },
      { "type": "Phone Call", "date": "2024-01-01" }
    ],
    "nextScheduledCommunication": { "type": "LinkedIn Post", "date": "2024-01-15" }
  },
  {
    "Id": 5,
    "name": "FinServe",
    "lastCommunications": [
      { "type": "Email", "date": "2023-11-30" },
      { "type": "LinkedIn Post", "date": "2023-12-05" },
      { "type": "LinkedIn Message", "date": "2023-12-10" },
      { "type": "Phone Call", "date": "2023-12-15" },
      { "type": "Webinar", "date": "2023-12-20" }
    ],
    "nextScheduledCommunication": { "type": "Email", "date": "2024-01-10" }
  },
  {
    "Id": 6,
    "name": "AutoDrive",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-11-10" },
      { "type": "Phone Call", "date": "2023-11-15" },
      { "type": "LinkedIn Message", "date": "2023-11-20" },
      { "type": "Email", "date": "2023-11-25" },
      { "type": "Survey", "date": "2023-11-30" }
    ],
    "nextScheduledCommunication": { "type": "Phone Call", "date": "2024-01-05" }
  },
  {
    "Id": 7,
    "name": "EcoGreen",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-12-01" },
      { "type": "Email", "date": "2023-12-05" },
      { "type": "Phone Call", "date": "2023-12-10" },
      { "type": "LinkedIn Message", "date": "2023-12-15" },
      { "type": "Email", "date": "2023-12-20" }
    ],
    "nextScheduledCommunication": { "type": "LinkedIn Message", "date": "2024-01-08" }
  },
  {
    "Id": 8,
    "name": "BrightSolutions",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-11-25" },
      { "type": "Survey", "date": "2023-11-30" },
      { "type": "Email", "date": "2023-12-05" },
      { "type": "LinkedIn Message", "date": "2023-12-10" },
      { "type": "Phone Call", "date": "2023-12-15" }
    ],
    "nextScheduledCommunication": { "type": "LinkedIn Post", "date": "2024-01-02" }
  },
  {
    "Id": 9,
    "name": "MediaWave",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-12-01" },
      { "type": "LinkedIn Message", "date": "2023-12-05" },
      { "type": "Email", "date": "2023-12-10" },
      { "type": "Phone Call", "date": "2023-12-15" },
      { "type": "Webinar", "date": "2023-12-20" }
    ],
    "nextScheduledCommunication": { "type": "Survey", "date": "2024-01-07" }
  },
  {
    "Id": 10,
    "name": "RetailTech",
    "lastCommunications": [
      { "type": "LinkedIn Post", "date": "2023-12-01" },
      { "type": "Email", "date": "2023-12-05" },
      { "type": "Phone Call", "date": "2023-12-10" },
      { "type": "LinkedIn Message", "date": "2023-12-15" },
      { "type": "Survey", "date": "2023-12-20" }
    ],
    "nextScheduledCommunication": { "type": "Webinar", "date": "2024-01-10" }
  }
]


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
                  <CardContent >
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
                        isDateCrossed(x.nextScheduledCommunication.date)
                          ? "button-card delayed-color"
                          : "button-card sheduled-color"
                      }
                    >
                      Next Scheduled Communication:
                      <br />
                      <span>
                        {x.nextScheduledCommunication.type}:{" "}
                        {x.nextScheduledCommunication.date}
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

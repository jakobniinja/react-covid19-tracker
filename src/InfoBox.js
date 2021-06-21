import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
  return (
    <Card>
      <CardContent className="infoBox">
        <Typography color="textSecondary" className="infoBox__title">
          {" "}
          {title}{" "}
        </Typography>
        <h2 className="infoBox__cases"> {cases} </h2>

        <Typography className="info__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

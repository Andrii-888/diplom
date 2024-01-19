import { Breadcrumbs } from "@mui/material";
import React from "react";

const BreadC = ({ breadcrumbs }) => {
  return (
    <>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </>
  );
};

export default BreadC;

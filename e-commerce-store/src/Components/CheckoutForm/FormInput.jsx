import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        error={isError}
        render={({ field }) => <TextField fullWidth label={label} required />}
      />
    </Grid>
  );
};

export default FormInput;

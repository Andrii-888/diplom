import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "./FormProvider";
import RHFTextField from "./RHFTextField";
import { Typography, Stack, CircularProgress, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PHONE_REG_EXP } from "../../constants";

function DiscountForm({ onSubmit }) {
  const { palette } = useTheme();

  const formSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Phone is required!")
      .matches(PHONE_REG_EXP, "Phone number is not valid"),
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .required("email is required!")
      .email("enter valid email"),
  });

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { phoneNumber: "", name: "", email: "" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleBlockLetters = (event) => {
    if (/^\+\d{0,12}$/.test(event.target.value)) {
      return event;
    }

    event.target.value = event.target.value.slice(0, -1);
    return event;
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ gap: "30px" }}>
        <RHFTextField
          name="name"
          sx={{
            maxWidth: "473px",
            height: "76px",
            borderRadius: "25px",
            backgroundColor: palette.common.white,
            border: "none",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            sx: {
              minHeight: "100%",
              "& input": {
                height: "76px",
                boxSizing: "border-box",
              },
              "& .MuiOutlinedInput-input:-webkit-autofill": {
                borderRadius: "25px",
              },
            },
          }}
          onChange={handleBlockLetters}
        />
        <RHFTextField
          name="phone"
          sx={{
            maxWidth: "473px",
            height: "76px",
            borderRadius: "25px",
            backgroundColor: palette.common.white,
            border: "none",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            sx: {
              minHeight: "100%",
              "& input": {
                height: "76px",
                boxSizing: "border-box",
              },
              "& .MuiOutlinedInput-input:-webkit-autofill": {
                borderRadius: "25px",
              },
            },
          }}
          onChange={handleBlockLetters}
        />
        <RHFTextField
          name="email"
          id="outlined-basic"
          sx={{
            maxWidth: "473px",
            height: "76px",
            borderRadius: "25px",
            backgroundColor: palette.common.white,
            border: "none",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            variant: "outlined",
            sx: {
              minHeight: "100%",
              "& input": {
                height: "76px",
                boxSizing: "border-box",
              },
              "& .MuiOutlinedInput-input:-webkit-autofill": {
                borderRadius: "5px",
              },
            },
          }}
          onChange={handleBlockLetters}
        />

        <Button
          variant="outlined"
          type="submit"
          sx={{ height: "58px", width: "100%", backgroundColor: "#fff" }}
        >
          <Typography
            variant="h3"
            component="span"
            sx={{
              color: "#282828",
              textASlign: "center",
              fontFamily: "Montserrat",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "130%",
              gap: "32px",
            }}
          >
            {isSubmitting ? (
              <CircularProgress color="inherit" />
            ) : (
              "Get a discount"
            )}
          </Typography>
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default DiscountForm;

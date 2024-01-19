import React, { memo } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "./FormProvider";
import RHFTextField from "./RHFTextField";
import { Typography, Stack, CircularProgress, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PHONE_REG_EXP } from "../../constants";

const handleBlockLetters = (event) => {
  if (/^\+{0,1}\d{0,12}$/.test(event.target.value)) {
    return event;
  }
  return event;
};

const OrderForm = ({ onSubmit, loading }) => {
  const { palette, typography } = useTheme();

  const formSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone is required!")
      .matches(PHONE_REG_EXP, "Phone number is not valid!"),
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

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ gap: 4 }}>
        <RHFTextField
          name="name"
          placeholder="NAME"
          sx={{
            height: "40px",

            "& fieldset": {
              borderColor: palette.common.black,
              borderRadius: "5px",
            },
          }}
          InputProps={{
            sx: {
              minHeight: "100%",

              "& input": {
                height: "40px",

                boxSizing: "border-box",
                fontSize: 18,
              },
              "& .MuiOutlinedInput-input:-webkit-autofill": {
                borderRadius: "5px",
              },
            },
          }}
          onChange={handleBlockLetters}
        />

        <RHFTextField
          name="phoneNumber"
          placeholder="Phone Number"
          sx={{
            height: "40px",
            "& fieldset": {
              borderColor: palette.common.black,
              borderRadius: "5px",
            },
          }}
          InputProps={{
            sx: {
              minHeight: "100%",

              "& input": {
                height: "40px",
                boxSizing: "border-box",
                fontSize: 18,
              },
              "& .MuiOutlinedInput-input:-webkit-autofill": {
                borderRadius: "5px",
              },
            },
          }}
          onChange={handleBlockLetters}
        />
        <RHFTextField
          name="email"
          placeholder="EMAIL"
          sx={{
            height: "40px",
            "& fieldset": {
              borderColor: palette.common.black,
              borderRadius: "5px",
            },
          }}
          InputProps={{
            sx: {
              minHeight: "100%",

              "& input": {
                height: "40px",
                boxSizing: "border-box",
                fontSize: 18,
              },
              "& .MuiOutlinedInput-input:-webkit-autofill": {
                borderRadius: "5px",
              },
            },
          }}
          onChange={handleBlockLetters}
        />

        <Button
          variant="contained"
          disableElevation
          color="success"
          type="submit"
          sx={{
            height: "40px",
            borderRadius: "5px",
            "&:hover": {
              color: "white",
              backgroundColor: "gold",
            },
          }}
        >
          <Typography
            sx={{
              color: palette.common.white,
              fontSize: "28px",
              fontWeight: typography.fontWeightMedium,
            }}
          >
            {isSubmitting || loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Order"
            )}
          </Typography>
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default memo(OrderForm);

import {
  Box,
  Stack,
  TextField,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import Image from "../../../assets/image.svg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "./style";
import {
  saleOrder,
  selectCartSaleStatus,
  selectCartSaleError,
  resetCartSaleStatus,
} from "../../../store/features/sale/saleSlice";
import { PHONE_REG_EXP, EMAIL_REG_EXP } from "../../../constants";

const GetDiscount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isSubmited, setSubmited] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const status = useSelector(selectCartSaleStatus);
  const error = useSelector(selectCartSaleError);

  if (status === "success" && !message) {
    setMessage("Request for sale was sent success!");
    dispatch(resetCartSaleStatus());
  }

  if (status === "error" && !message) {
    setMessage(error);
    dispatch(resetCartSaleStatus());
  }

  useEffect(() => {
    const errors = {};

    if (!name || name.length < 2) {
      errors.name = "Name is required";
    }

    if (!email || email.length === 0) {
      errors.email = "Email is required";
    } else if (!EMAIL_REG_EXP.test(email)) {
      errors.email = "Enter a valid email";
    }

    if (!number || !PHONE_REG_EXP.test(number)) {
      errors.number = "Phone number is not valid!";
    } else if (number.length < 11) {
      errors.number = "Phone is required!";
    }

    setErrors(errors);
  }, [name, email, number]);

  const handleSubmitSale = (event) => {
    event.preventDefault();
    setSubmited(true);
    if (errors.name || errors.number || errors.email) {
      return;
    }
    const formData = { name, email, phoneNumber: number };

    dispatch(saleOrder(formData));
    setErrors({});
    setSubmited(false);
    setName("");
    setEmail("");
    setNumber("");
  };

  const handleHideMessage = () => {
    setMessage("");
  };

  return (
    <Stack
      sx={{
        backgroundImage: "linear-gradient(261deg, #0B710B 32.63%, #393 98.96%)",
        width: "100%",
        p: { xs: "20px", md: "32px 32px 0 32px" },
        gap: "24px",
        justifyContent: "flex-end",
        maxWidth: "1360px",
        m: "0 auto",
      }}
    >
      <Snackbar
        open={!!message}
        autoHideDuration={2000}
        onClose={handleHideMessage}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleHideMessage}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Stack
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "110%",
          }}
        >
          5% off on the first order
        </Typography>
      </Stack>
      <Stack
        sx={{
          gap: "32px",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack
          sx={{
            width: "100%",
            maxWidth: "800px",
            gap: "32px",
            flexDirection: { xs: "column", md: "row" },
            display: { sx: "none", md: "block" },
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundSize: "contain",
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              height: { xs: "120px", md: "360px" },
              maxWidth: "748px",
              backgroundPosition: "center",
            }}
          />
        </Stack>
        <form onSubmit={handleSubmitSale}>
          <Stack
            sx={{
              width: { xs: "100%", md: "450px" },
              gap: "16px",
            }}
          >
            <Stack sx={{ position: "relative" }}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
                sx={{
                  border: "solid 1px #fff",
                  borderRadius: "6px",
                  color: "#fff !important",
                  marginBottom: "5px",
                }}
              />
              {isSubmited && errors.name && (
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "-15px",
                    color: "red",
                    fontSize: "13px",
                  }}
                >
                  {errors.name}
                </Typography>
              )}
            </Stack>
            <Stack sx={{ position: "relative" }}>
              <TextField
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
                value={number}
                type="text"
                onChange={(event) => setNumber(event.target.value)}
                sx={{
                  border: "solid 1px #fff",
                  borderRadius: "6px",
                  marginBottom: "5px",
                }}
              />
              {isSubmited && errors.number && (
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "-15px",
                    color: "red",
                    fontSize: "13px",
                  }}
                >
                  {errors.number}
                </Typography>
              )}
            </Stack>
            <Stack sx={{ position: "relative" }}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                sx={{
                  border: "solid 1px #fff",
                  borderRadius: "6px",
                  marginBottom: "5px",
                }}
              />
              {isSubmited && errors.email && (
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "-15px",
                    color: "red",
                    fontSize: "13px",
                  }}
                >
                  {errors.email}
                </Typography>
              )}
            </Stack>
            <StyledButton type="submit">
              <Typography
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
                Get a discount
              </Typography>
            </StyledButton>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default GetDiscount;

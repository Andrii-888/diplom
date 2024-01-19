import {
  Alert,
  Button,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Page from "../../components/Page";
import { APP_ROUTES } from "../../constants";
import { styled } from "@mui/material/styles";
import { pxToRem } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCartStatus,
  selectCartError,
  selectCartProducts,
  selectCartStatus,
  selectCartTotal,
  submitOrder,
  removeAllFromCart,
} from "../../store/features/cart/cartSlice";
import OrderForm from "../../components/forms/OrderForm";
import { useCallback, useState } from "react";
import CartProductItem from "./CartProductItem";

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  fontSize: pxToRem(20),
}));

const Cart = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { palette, typography } = useTheme();
  const dispatch = useDispatch();

  const cartProducts = useSelector(selectCartProducts);
  const total = useSelector(selectCartTotal);
  const status = useSelector(selectCartStatus);
  const error = useSelector(selectCartError);
  const handleSubmitOrder = useCallback(
    async (fields) => {
      const res = await dispatch(
        submitOrder({
          ...fields,
          total,
        })
      );

      if (res.payload.status === "OK") {
        setTimeout(() => {
          navigate("/");
        }, 10000);
        dispatch(removeAllFromCart());
      }
    },
    [dispatch, total]
  );

  const handleHideMessage = () => {
    setMessage("");
  };

  if (status === "success" && !message) {
    setMessage("The order was sent successfully.");
    dispatch(resetCartStatus());
  }

  if (status === "error" && !message) {
    setMessage(error);
    dispatch(resetCartStatus());
  }

  return (
    <Page>
      <Snackbar
        open={!!message}
        autoHideDuration={5000}
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          m: { xs: "20px 10px", md: "50px 10px" },
          gap: "20px",
        }}
      >
        <Stack>
          {" "}
          <Typography
            variant="h1"
            sx={{
              color: "#282828",
              fontSize: "54px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "110%",
            }}
          >
            Shopping cart
          </Typography>
        </Stack>
        <Link
          to={APP_ROUTES.PRODUCTS}
          sx={{
            display: "flex",
            width: "250px",
            height: "36px",
            justifyContent: "center",
            alignItems: "center",
            color: "#282828",
            "&:hover": {
              color: "white",
              background: "gold",
              borderRadius: "8px",
            },
          }}
        >
          Back to the store
        </Link>
      </Stack>
      {!cartProducts.length && (
        <Stack sx={{ m: 1 }}>
          <Typography>
            Looks like you have no items in your basket currently.
          </Typography>
          <Link to="/products">
            <Button
              variant="contained"
              sx={{
                maxWidth: "313px",
                width: "100%",
                height: "58px",
                marginTop: "32px",
                borderRadius: "6px",
                color: "#339933x",
                "&:hover": {
                  color: "white",
                  backgroundColor: "gold",
                },
              }}
            >
              Continue Shopping
            </Button>
          </Link>
        </Stack>
      )}
      {cartProducts.length > 0 && (
        <Stack alignItems="center" sx={{ mb: "30px" }}>
          <Grid container sx={{ mt: 0 }} spacing={8}>
            <Grid item xs={12} lg={7}>
              {cartProducts.map(({ item, amount }) => (
                <CartProductItem key={item.id} product={item} amount={amount} />
              ))}
            </Grid>

            <Grid item xs={12} lg={5}>
              <Stack
                sx={{
                  gap: 6,
                  maxWidth: "496px",
                  height: "393px",
                  borderRadius: "21px",
                  flexShrink: 0,
                  border: `"2px solid" ${palette.common.black}`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: pxToRem(28),
                    fontWeight: typography.fontWeightMedium,
                  }}
                >
                  Order details
                </Typography>

                <Stack
                  flexDirection="row"
                  alignItems="baseline"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontSize: pxToRem(24),
                      fontWeight: typography.fontWeightRegular,
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: pxToRem(32),
                      fontWeight: typography.fontWeightMedium,
                    }}
                  >
                    {total.toFixed(2)}
                    <span
                      style={{
                        fontSize: pxToRem(10),
                        verticalAlign: "baseline",
                      }}
                    >
                      $
                    </span>
                  </Typography>
                </Stack>

                <OrderForm
                  onSubmit={handleSubmitOrder}
                  loading={status === "pending"}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      )}
    </Page>
  );
};

export default Cart;

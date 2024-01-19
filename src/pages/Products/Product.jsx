import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { selectProductById } from "../../store/features/products/productsSlice";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { addToCart, removeFromCart } from "../../store/features/cart/cartSlice";
import { getPercentage, pxToRem } from "../../utils";
import { useEffect, useState } from "react";
import { selectProductInCartById } from "../../store/features/cart/cartSlice";
import { APP_ROUTES } from "../../constants";
import BreadC from "../../components/breadcrumps/BreadC";

const getImgPath = (imgName) => {
  return require(`../../assets${imgName}`);
};

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const [bread, setBread] = useState([]);

  const product = useSelector((state) => selectProductById(state, id));
  const { description, image, title, discont_price, price } = product || {};

  const isProductAddedToCart = useSelector((state) =>
    selectProductInCartById(state, id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const arr = pathname.split("/");
    arr[0] = "/";
    const newArr = arr.map((item, index, array) => {
      if (item === "/") {
        return (
          <Link underline="hover" key="1" color="inherit" to={APP_ROUTES.MAIN}>
            <Button
              sx={{
                width: "142px",
                height: "36px",
                borderRadius: "8px",
                justifyContent: "center",
                alignItems: "center",
                color: "#282828",
                ml: "auto",
                "&:hover": {
                  color: "white",
                  background: "gold",
                },
              }}
            >
              Main Page
            </Button>
          </Link>
        );
      }
      if (index + 1 === array.length) {
        return (
          <Typography
            key="3"
            sx={{
              width: "142px",
              height: "36px",
              borderRadius: "8px",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: "bold",
              p: "8px 0",
              color: "#282828",
              ml: "auto",
              "&:hover": {
                color: "white",
                background: "gold",
              },
            }}
          >
            {title.split(" ")[0]}
          </Typography>
        );
      }
      return (
        <Link underline="hover" key="2" color="inherit" to={`/${item}`}>
          <Button
            sx={{
              width: "142px",
              height: "36px",
              borderRadius: "8px",
              justifyContent: "center",
              alignItems: "center",
              color: "#282828",
              ml: "auto",
              "&:hover": {
                color: "white",
                background: "gold",
              },
            }}
          >
            {item}
          </Button>
        </Link>
      );
    });
    setBread(newArr);
  }, [pathname]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleAddOrRemoveFromCart = () => {
    if (isProductAddedToCart) {
      handleRemoveFromCart();
    } else {
      handleAddToCart();
    }
  };

  return (
    <Container
      disableGutters
      sx={{
        p: { xs: "0 15px", md: "0 30px" },
        m: { xs: "30px 0", md: "70px 0" },
      }}
      maxWidth={false}
    >
      <Stack
        sx={{
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <BreadC breadcrumbs={bread} />
      </Stack>

      <Grid container spacing={9} sx={{ marginTop: "20px" }}>
        <Grid item xs={12} lg={7}>
          <Box
            component="div"
            sx={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: { xs: "320px", md: "750px" },
              maxWidth: "710px",
              backgroundImage: `url(${getImgPath(image)})`,
              m: { xs: "10px", md: "0 60px" },
            }}
          />
        </Grid>

        <Grid item xs={12} lg={5}>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "130%",
              letterSpacing: "1.08px",
              mb: 4,
            }}
          >
            {title}
          </Typography>

          <Stack
            gap={5}
            sx={{
              mr: { xs: "10px", md: "60px" },
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  lineHeight: "130%",
                  fontSize: pxToRem(70),
                }}
              >
                {discont_price ? discont_price : price}
                <span
                  style={{
                    fontSize: pxToRem(20),
                    verticalAlign: "baseline",
                  }}
                >
                  $
                </span>
              </Typography>

              {discont_price && (
                <>
                  <Typography
                    sx={{
                      fontSize: pxToRem(20),
                      color: "#8B8B8B",
                      textDecoration: "line-through",
                    }}
                  >
                    {price}$
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: pxToRem(28),
                      color: "#FF32A1",
                      fontWeight: 600,
                    }}
                  >
                    {getPercentage(price, discont_price)}
                  </Typography>
                </>
              )}
            </Stack>
            <Button
              variant="contained"
              color="success"
              onClick={handleAddOrRemoveFromCart}
              sx={{
                maxWidth: "341px",
                width: "100%",
                height: "86px",
                borderRadius: "10px",
                justifyContent: "center",
                "&:hover": {
                  color: "white",
                  backgroundColor: "gold",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: pxToRem(28),
                  fontWeight: 700,
                }}
              >
                {isProductAddedToCart ? "Remove from cart" : "Add to cart"}
              </Typography>
            </Button>

            <Divider />

            <Stack gap={2}>
              <Typography
                sx={{
                  fontSize: pxToRem(20),
                  fontWeight: 600,
                }}
              >
                Description
              </Typography>

              <Typography>{description}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;

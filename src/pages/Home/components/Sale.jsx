import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import ProductListItem from "../../Products/ProductListItem";
import { APP_ROUTES } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";

const Sale = ({ products }) => {
  const navigate = useNavigate();
  const handleNavToSalesPage = () => {
    navigate(APP_ROUTES.SALES);
  };
  return (
    <Stack
      sx={{
        m: { xs: "40px 10px", md: "80px 40px 40px 40px" },
        gap: "30px",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          gap: "20px",
        }}
      >
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
          Sale
        </Typography>
        <Stack>
          <Link to={APP_ROUTES.SALES} state={{ sale: true }}>
            <Button
              variant="outlined"
              sx={{
                marginLeft: "auto",
                width: "142px",
                height: "36px",
                marginLeft: "auto",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                "&:hover": {
                  color: "white",
                  background: "gold",
                },
              }}
            >
              All sales
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: "36px",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center", md: "flex-start" },

          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <ProductListItem
            product={product}
            key={product.id}
            isNotInteractive
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Sale;

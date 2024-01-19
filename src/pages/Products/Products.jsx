import { Button, Container, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  selectAllProducts,
  selectCategoryProducts,
  selectSaleProducts,
} from "../../store/features/products/productsSlice";
import Filters from "./Filters";
import ProductListItem from "./ProductListItem";
import { selectCategoryTitleById } from "../../store/features/categories/categoriesSlice";
import { selectCartProducts } from "../../store/features/cart/cartSlice";
import { useEffect, useMemo, useState } from "react";
import BreadC from "../../components/breadcrumps/BreadC";
import { APP_ROUTES } from "../../constants";

function Products() {
  const [bread, setBread] = useState([]);
  const { state, pathname } = useLocation();

  const { sale = false, categoryId = null } = state || {};

  const [searchParams] = useSearchParams();
  const { discounted, to, from, sortedBy } = Object.fromEntries(searchParams);

  const allProducts = useSelector(selectAllProducts);
  let products = allProducts;

  const saleProducts = useSelector(selectSaleProducts);
  const cartProducts = useSelector(selectCartProducts);
  const categoryProducts = useSelector((state) =>
    selectCategoryProducts(state, categoryId)
  );
  const selectedCategoryTitle = useSelector((state) =>
    selectCategoryTitleById(state, categoryId)
  );

  if (sale) {
    products = [...saleProducts];
  }

  if (categoryId) {
    products = [...categoryProducts];
  }

  if (to && from && from <= to) {
    products = products.filter(
      (product) => product.price >= from && product.price <= to
    );
  }

  if (discounted) {
    products = products.filter((product) => product.discont_price);
  }

  if (sortedBy && sortedBy !== "default") {
    products = products.toSorted((product1, product2) => {
      if (sortedBy === "price") {
        return product1.price > product2.price
          ? 1
          : product1.price < product2.price
          ? -1
          : 0;
      }

      if (sortedBy === "discount") {
        if (product1.discont_price && product2.discont_price) {
          return product1.discont_price > product2.discont_price
            ? 1
            : product1.discont_price < product2.discont_price
            ? -1
            : 0;
        }

        if (product1.discont_price && !product2.discont_price) {
          return -1;
        }

        if (!product1.discont_price && product2.discont_price) {
          return -1;
        }
      }

      if (sortedBy === "title") {
        return product1.title.localeCompare(product2.title);
      }

      return 0;
    });
  }

  const title = sale
    ? "Products with sale"
    : categoryId
    ? selectedCategoryTitle
    : "All Products";

  const cartProductIds = useMemo(
    () => cartProducts.map((product) => product.item.id),
    [cartProducts]
  );

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
            {item}
          </Typography>
        );
      }

      return (
        <Link underline="hover" key="2" color="inherit" to={item}>
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

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        flexDirection: "column",
        m: "40px 40px 40px 40px",
        gap: "15px",
      }}
    >
      <Stack sx={{ flexDirection: "row", gap: "12px" }}>
        <BreadC breadcrumbs={bread} />
      </Stack>

      <Typography
        variant="h1"
        sx={{
          color: "#282828",
          fontSize: "54px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "110%",
          marginTop: "20px",
        }}
      >
        {title}
      </Typography>

      <Filters />

      <Stack
        sx={{
          flexDirection: "row",
          gap: "36px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductListItem
            product={product}
            key={product.id}
            isProductAddedToCart={cartProductIds.includes(product.id)}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Products;

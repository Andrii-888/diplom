import { Typography, Box, Stack } from "@mui/material";
import { getPercentage } from "../../utils";
import { useTheme } from "@mui/material/styles";
import { AddToCartButton, ProductIconBlock } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

const getImgPath = (imgName) => {
  return require(`../../assets${imgName}`);
};

const ProductListItem = ({
  product,
  isNotInteractive = false,
  isProductAddedToCart,
}) => {
  const { title, price, discont_price, image, id } = product;

  const { typography } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddOrRemoveFromCart = (event) => {
    event.stopPropagation();

    if (isProductAddedToCart) {
      handleRemoveFromCart(id);
    } else {
      handleAddToCart(product);
    }
  };

  const handleNavToProductPage = () => {
    navigate(`${APP_ROUTES.PRODUCTS}/${id}`);
  };

  return (
    <Stack
      sx={{
        gap: "20px",
        alignItems: "center",
        maxWidth: "300px",
        cursor: "pointer",
      }}
      onClick={handleNavToProductPage}
    >
      <ProductIconBlock>
        <Box
          component="div"
          sx={{
            backgroundSize: "cover",
            backgroundImage: `url(${getImgPath(image)})`,
            backgroundRepeat: "no-repeat",
            height: "350px",
            width: "280px",
          }}
        />

        {!isNotInteractive && (
          <AddToCartButton onClick={handleAddOrRemoveFromCart}>
            {isProductAddedToCart ? "Remove from cart" : "Add to cart"}
          </AddToCartButton>
        )}
      </ProductIconBlock>

      <Stack
        sx={{
          flexDirection: "row",
          gap: "20px",
          color: "#000",
          alignItems: "baseline",
          justifyContent: "space-between",
          width: "100%",
          p: "0 24px 0",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          ${discont_price ? discont_price : price}
        </Typography>

        {discont_price && (
          <>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#8B8B8B",
                textDecoration: "line-through",
              }}
            >
              ${price}
            </Typography>

            <Typography sx={{ fontSize: "20px", color: "#FF32A1" }}>
              {getPercentage(price, discont_price)}%
            </Typography>
          </>
        )}
      </Stack>

      <Typography
        variant="body2"
        sx={{
          fontSize: "16px",
          fontStyle: "normal",
          color: "#3A3A3A",
          alignSelf: "flex-start",
          fontWeight: typography.fontWeightMedium,
          m: "0 24px 0",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default ProductListItem;

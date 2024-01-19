import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { pxToRem } from "../../utils";
import {
  Close as CloseIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  changeProductAmount,
  removeFromCart,
} from "../../store/features/cart/cartSlice";

const ProductRow = styled((props) => <Stack {...props} />)(({ theme }) => ({}));

const OperandsBlock = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px",
  width: "140px",
  height: "40px",
  borderRadius: "12px",
  border: "1px solid #000",
}));

const getImgPath = (imgName) => {
  return require(`../../assets${imgName}`);
};

const CartProductItem = ({ product, amount }) => {
  const { title, price, discont_price, image, id } = product;

  const { typography } = useTheme();
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const handleChangeProductAmount = (operand) => {
    dispatch(changeProductAmount({ id, operand }));
  };

  return (
    <ProductRow
      sx={{
        flexDirection: { xs: "column", md: "row" },
        borderTop: "1px solid #A7A7A7",
        padding: "40px 0",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",

        "&:last-of-type": {
          borderBottom: "1px solid #A7A7A7",
        },
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(${getImgPath(image)})`,
          backgroundRepeat: "no-repeat",
          height: 166,
          minWidth: 192,
          borderRadius: 1.5,
        }}
      />

      <Stack
        sx={{
          flex: 2,
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            color: "#3A3A3A",
            fontSize: pxToRem(18),
            textAlign: "center",
            fontWeight: typography.fontWeightMedium,
          }}
        >
          {title}
        </Typography>

        <OperandsBlock>
          <RemoveIcon
            onClick={() => handleChangeProductAmount(-1)}
            sx={{ cursor: "pointer" }}
          />

          <Typography
            sx={{
              fontSize: pxToRem(18),
              fontWeight: typography.fontWeightMedium,
            }}
          >
            {amount}
          </Typography>

          <AddIcon
            onClick={() => handleChangeProductAmount(1)}
            sx={{ cursor: "pointer" }}
          />
        </OperandsBlock>
      </Stack>

      <Typography
        sx={{
          fontSize: pxToRem(32),
          fontWeight: typography.fontWeightMedium,
          alignSelf: "center",
        }}
      >
        {discont_price ? discont_price : price}
        <span
          style={{
            fontSize: pxToRem(10),
            verticalAlign: "baseline",
          }}
        >
          $
        </span>
      </Typography>

      {discont_price && (
        <Typography
          sx={{
            fontSize: pxToRem(20),
            color: "#8B8B8B",
            textDecoration: "line-through",
            fontWeight: typography.fontWeightRegular,
            alignSelf: "center",
          }}
        >
          ${price}
        </Typography>
      )}

      <CloseIcon
        onClick={handleRemoveFromCart}
        sx={{
          alignSelf: "flex-start",
          cursor: "pointer",
          order: { xs: -1, md: 10 },
        }}
      />
    </ProductRow>
  );
};

export default CartProductItem;

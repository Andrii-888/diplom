import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

const getImgPath = (imgName) => {
  return require(`../../assets${imgName}`);
};

const CategoryListItem = ({ category }) => {
  const { typography } = useTheme();
  const navigate = useNavigate();

  const handleSelectCategory = () => {
    navigate(APP_ROUTES.PRODUCTS, { state: { categoryId: category.id } });
  };

  return (
    <Stack
      sx={{
        gap: "20px",
        alignItems: "center",
        fontSize: "18px",
        cursor: "pointer",
      }}
      onClick={handleSelectCategory}
    >
      <Box
        component="div"
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(${getImgPath(category.image)})`,
          backgroundRepeat: "no-repeat",
          height: "350px",
          width: "318px",
        }}
      />

      <Typography
        variant="body2"
        sx={{ fontWeight: typography.fontWeightMedium }}
      >
        {category.title}
      </Typography>
    </Stack>
  );
};

export default CategoryListItem;

import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../constants";

const getImgPath = (imgName) => {
  return require(`../../../assets${imgName}`);
};

const Categories = ({ categories }) => {
  const navigate = useNavigate();

  const { typography } = useTheme();

  const handleNavToCategoriesPage = () => {
    navigate(APP_ROUTES.CATEGORIES);
  };

  return (
    <Stack sx={{ m: { xs: "40px 5px", md: "80px 40px" }, gap: "30px" }}>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
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
          Categories
        </Typography>
        <Button
          onClick={handleNavToCategoriesPage}
          variant="outlined"
          sx={{
            width: "142px",
            height: "36px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            "&:hover": {
              color: "white",
              background: "gold",
            },
          }}
        >
          All categories
        </Button>
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: "30px",
          justifyContent: { xs: "center", md: "space-between" },
          pT: "40px",
        }}
      >
        {categories.map((category, index) => (
          <Stack key={category.id}>
            {index === 0 && (
              <Stack
                sx={{
                  flexDirection: { xs: "column" },
                  gap: "20px",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${getImgPath(category.image)})`,
                    backgroundRepeat: "no-repeat",
                    height: "350px",
                    width: "310px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: typography.fontWeightMedium }}
                >
                  {category.title}
                </Typography>
              </Stack>
            )}
            {index > 0 && (
              <Stack
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "20px",
                  alignItems: "center",
                  fontSize: "18px",
                }}
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
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Categories;

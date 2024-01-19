import { Box, Button, Stack, Typography } from "@mui/material";
import Img from "../../../assets/img.svg";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../constants";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavToSalePage = () => {
    navigate(APP_ROUTES.PRODUCTS, { state: { sale: true } });
  };
  return (
    <Stack>
      <Stack>
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundRepeat: { xs: "no-repeat", md: "round" },
            height: "600px",
            width: "100%",
            // flexShrink: 0,
          }}
        >
          <Box sx={{ p: { xs: "40px 10px", md: "80px 40px 0 40px" } }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "32px", md: "80px" },
                fontStyle: "normal",
                fontWeight: 550,
                lineHeight: "110%",
                color: "#FFFFFF",
              }}
            >
              Amazing Discounts{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "32px", md: "80px" },
                fontStyle: "normal",
                fontWeight: 550,
                lineHeight: "110%",
                color: "#FFFFFF",
              }}
            >
              on Garden Products!
            </Typography>
          </Box>

          <Button
            onClick={handleNavToSalePage}
            variant="contained"
            sx={{
              m: "40px 0 0 40px",
              width: "218px",
              height: "58px",
              gap: "10px",
              borderRadius: "6px",
              color: "#339933x",
              "&:hover": {
                color: "white",
                backgroundColor: "gold",
              },
            }}
          >
            Check out
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Banner;

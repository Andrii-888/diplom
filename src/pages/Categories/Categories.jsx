import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CategoryListItem from "./CategoryListItem";
import Page from "../../components/Page";
import { selectAllCategories } from "../../store/features/categories/categoriesSlice";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";

import breadcrumbs from "../../components/breadcrumps/BreadC";
import BreadC from "../../components/breadcrumps/BreadC";
import { useEffect, useState } from "react";
import { APP_ROUTES } from "../../constants";

function Categories() {
  const categories = useSelector(selectAllCategories);
  const { pathname } = useLocation();
  const [bread, setBread] = useState([]);

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
    <>
      <Stack
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
          }}
        >
          Categories
        </Typography>
      </Stack>

      <Page>
        <Stack
          sx={{
            flexDirection: "row",
            height: "370px",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              // 640: {
              //   slidesPerView: 2,
              //   spaceBetween: 20,
              // },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
            }}
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <CategoryListItem category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Page>
    </>
  );
}

export default Categories;
// <Link to={APP_ROUTES.MAIN}>
// <Button
//   sx={{
//     width: "142px",
//     height: "36px",
//     borderRadius: "8px",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#282828",
//     ml: "auto",
//     "&:hover": {
//       color: "white",
//       background: "gold",
//     },
//   }}
// >
//   Main Page
// </Button>
// </Link>
// <Link to={APP_ROUTES.PRODUCTS}>
// <Button
//   sx={{
//     width: "142px",
//     height: "36px",
//     borderRadius: "8px",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#282828",
//     "&:hover": {
//       color: "white",
//       background: "gold",
//     },
//   }}
// >
//   All Products
// </Button>
// </Link>

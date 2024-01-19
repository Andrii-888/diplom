import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { selectHomeCategories } from "../../store/features/categories/categoriesSlice";
import { useSelector } from "react-redux";
import { selectSaleProductsDashboard } from "../../store/features/products/productsSlice";
import Sale from "./components/Sale";
import GetDiscount from "./components/GetDiscount";
import Categories from "./components/Categories";
import Banner from "./components/Banner";

function Home() {
 

  const categories = useSelector(selectHomeCategories);
  const saleProducts = useSelector(selectSaleProductsDashboard);

  const navigate = useNavigate();

  return (
    <Container disableGutters maxWidth={false} sx={{ p: "0px 0 80px 0" }}>
      <Banner />

      <Categories categories={categories} />

      <GetDiscount />

      <Sale products={saleProducts} />
    </Container>
  );
}

export default Home;

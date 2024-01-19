export const APP_ROUTES = {
  MAIN: "/",
  PRODUCTS: "/products",
  SALES: "/sales",
  CATEGORIES: "/categories",
  PRODUCT: "/products/:id",
  CART: "/cart",
};

export const ADDRESS = "Linkstraße 2, 8 OG, 10785, Berlin, Deutschland";
export const PHONE_NUMBER = "+49 999 999 99 99";
export const BASE_URL = "http://127.0.0.1:3333";

export const PHONE_REG_EXP =
  /^[+]{0,1}[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const EMAIL_REG_EXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

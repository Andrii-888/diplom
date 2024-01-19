import styled from "@emotion/styled";
import { Button, Checkbox, Select, Stack, TextField } from "@mui/material";

export const StyleTextField = styled(TextField)(({ theme }) => ({
  width: "103px",
  borderRadius: "7px",

  "& .MuiInputBase-input": {
    height: "42px",
    boxSizing: "border-box",
    padding: "10px",
    fontSize: "1rem",
  },

  "& .MuiFormLabel-root": {
    fontSize: "1rem",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.common.black,
  },
}));

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 7,
  borderColor: theme.palette.common.black,
  width: 40,
  height: 40,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.8), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: `2px auto ${theme.palette.success.light}`,
    outlineOffset: 2,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  boxShadow: "none",
  "&:before": {
    display: "block",
    width: 40,
    height: 40,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
}));

export const StyledCheckbox = styled((props) => (
  <Checkbox checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />
))({
  padding: 0,
});

export const StyledSelect = styled((props) => <Select {...props} />)(
  ({ theme }) => ({
    fontSize: "1rem",
    borderRadius: 7,
    width: 219,
    height: 40,

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.common.black,
    },
  })
);

export const AddToCartButton = styled(({ children, ...props }) => (
  <Button {...props}>{children}</Button>
))({
  padding: 0,
  height: "72px",
  borderRadius: "21px",
  border: "2px solid #339933",
  color: "#339933",
  backgroundColor: "#F1FFF1",
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,

  display: "none",
  "&:hover": {
    backgroundColor: "#F1FFF1",
  },
});

export const ProductIconBlock = styled(Stack)({
  position: "relative",
  "&:hover": {
    button: {
      display: "block",
    },
  },
});

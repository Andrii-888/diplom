import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Stack, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyleTextField, StyledCheckbox, StyledSelect } from "./styles";

const handleBlockLetters = (event) => {
  if (/^\d+$/.test(event.target.value)) {
    return event;
  }

  event.target.value = event.target.value.slice(0, -1);
  return event;
};

const NumberTextField = ({ onChange = () => {}, ...props }) => {
  const handleChange = (event) => {
    event = handleBlockLetters(event);

    onChange(event);
  };

  return <StyleTextField size="small" onChange={handleChange} {...props} />;
};

const SORT_OPTIONS = {
  DEFAULT: "default",
  PRICE: "price",
  TITLE: "title",
  DISCOUNT: "discount",
};

const Filters = () => {
  const { state } = useLocation();
  const { sale = false } = state || {};

  const [searchParams, setSearchParams] = useSearchParams();
  const filters = Object.fromEntries(searchParams);

  const [sortedBy, setSortedBy] = useState(
    filters.sortedBy || SORT_OPTIONS.DEFAULT
  );
  const [discounted, setDiscounted] = useState(!!filters.discounted);
  const [range, setRange] = useState({
    from: filters.from || "",
    to: filters.to || "",
  });

  const { palette } = useTheme();

  const handleSetFiltersToURL = (params) => {
    const combinedParams = {
      ...filters,
      ...params,
    };

    setSearchParams(
      Object.fromEntries(
        Object.entries(combinedParams).filter(([_, value]) => !!value)
      ),
      {
        state,
      }
    );
  };

  const handleChangeDiscounted = (event) => {
    setDiscounted(event.target.checked);

    handleSetFiltersToURL({
      discounted: event.target.checked,
    });
  };

  const handleChangeSortedBy = (event) => {
    setSortedBy(event.target.value);

    handleSetFiltersToURL({
      sortedBy: event.target.value,
    });
  };

  const handleChangeRange = ({ target }) => {
    const { name, value } = target;

    setRange((range) => ({
      ...range,
      [name]: value,
    }));

    handleSetFiltersToURL({
      ...range,
      [name]: value,
    });
  };

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        margin: "88px 0 54px 0",
      }}
    >
      <Stack flexDirection="row" sx={{ alignItems: "center", gap: "15px" }}>
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.625rem",
            letterSpacing: "0.0375rem",
            color: palette.common.black,
          }}
        >
          Price
        </Typography>

        <NumberTextField
          label="from"
          name="from"
          value={range.from}
          onChange={handleChangeRange}
        />
        <NumberTextField
          label="to"
          name="to"
          value={range.to}
          onChange={handleChangeRange}
        />
      </Stack>

      {!sale && (
        <Stack
          flexDirection="row"
          sx={{
            alignItems: "center",
            justifyContent: { xs: "space-between" },
            gap: "20px",
            m: { xs: "20px 0", md: "0" },
          }}
        >
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "1.625rem",
              letterSpacing: "0.0375rem",
              color: palette.common.black,
              m: { xs: "20px 0", md: "0 39px 0 40px" },
            }}
          >
            Discounted items
          </Typography>
          <StyledCheckbox
            checked={discounted}
            onChange={handleChangeDiscounted}
          />
        </Stack>
      )}

      <Stack
        flexDirection="row"
        sx={{ alignItems: "center", m: { xs: "20px 0", md: "0" } }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.625rem",
            letterSpacing: "0.0375rem",
            color: palette.common.black,
            m: { xs: "0 10px", md: "0 41px 0 91px" },
          }}
        >
          Sorted
        </Typography>

        <StyledSelect value={sortedBy} onChange={handleChangeSortedBy}>
          {Object.values(SORT_OPTIONS).map((option) => (
            <MenuItem sx={{ fontSize: "1rem" }} key={option} value={option}>
              by {option}
            </MenuItem>
          ))}
        </StyledSelect>
      </Stack>
    </Stack>
  );
};

export default Filters;

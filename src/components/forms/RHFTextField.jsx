import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export default function RHFTextField({ name, rules, onChange, ...props }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          onChange={(event) => {
            if (onChange && typeof onChange === "function") {
              field.onChange(onChange(event));
            } else {
              field.onChange(event);
            }
          }}
          {...props}
        />
      )}
    />
  );
}

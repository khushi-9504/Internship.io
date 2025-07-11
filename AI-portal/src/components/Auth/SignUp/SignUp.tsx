import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  Link,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { setSignUpData } from "../../../redux/features/authSlice";
import { ROLES, COUNTRIES, STATES } from "../../../common/constants";
import type { SignUpFormData } from "../../../types/Auth/authTypes";
import { FormContainer, StyledForm } from "./SignUpStyles";
import WrappedTypography from "../../Wrappers/WrappedTypography";

const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData & { confirmPassword: string }>();

  const [openToast, setOpenToast] = useState(false);

  const handleToastClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenToast(false);
  };

  const password = watch("password");

  const onSubmit = (data: SignUpFormData) => {
    dispatch(setSignUpData(data));
    setOpenToast(true); // show toast
  };

  return (
    <FormContainer>
      <WrappedTypography variant="h5" align="center" gutterBottom>
        Sign Up
      </WrappedTypography>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />

        {/* Last Name */}
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Last name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirm Password"
              type="password"
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
        />

        {/* Gender */}
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            )}
          />
        </FormControl>

        {/* Role */}
        <FormControl fullWidth required>
          <InputLabel>Role</InputLabel>
          <Controller
            name="role"
            control={control}
            rules={{ required: "Role is required" }}
            render={({ field }) => (
              <Select {...field}>
                {ROLES.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        {/* State */}
        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                {STATES.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        {/* Country */}
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                {COUNTRIES.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>

        {/* Postal Code */}
        <Controller
          name="postalCode"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Postal Code" fullWidth />
          )}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" fullWidth>
          Sign Up
        </Button>

        {/* Login Link */}
        <Box mt={2} textAlign="center">
          <Link href="/login" underline="hover">
            Already have an account? Login
          </Link>
        </Box>
      </StyledForm>

      {/* MUI Snackbar Toast */}
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleToastClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Signup successful!
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};

export default SignUp;

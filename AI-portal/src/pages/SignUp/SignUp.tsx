import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  Select,
  InputLabel,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  role: string;
  state: string;
  country: string;
  postalCode: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    role: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const roles = ["Student", "Recruiter", "Admin"];
  const countries = ["India", "USA", "Canada", "UK"];
  const states = ["Gujarat", "Maharashtra", "California", "Ontario"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          sm: "80%",
          md: "60%",
          lg: "40%",
        },
        mx: "auto",
        mt: 4,
        p: {
          xs: 2,
          sm: 3,
        },
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        Sign Up
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <TextField
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth required>
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={formData.role}
            onChange={handleSelectChange}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Select
            name="state"
            value={formData.state}
            onChange={handleSelectChange}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            name="country"
            value={formData.country}
            onChange={handleSelectChange}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          name="postalCode"
          label="Postal Code"
          value={formData.postalCode}
          onChange={handleInputChange}
          fullWidth
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;

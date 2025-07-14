import {
  Box,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../../redux/store";

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employee.list);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      padding={"2.5rem"}
      sx={{ backgroundColor: "#e0e0e0", borderTopLeftRadius: "35px" }}
    >
      <Typography typography={"h5"} fontWeight={"bold"}>
        Employees
      </Typography>

      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "30px",
          width: "100%",
          padding: "2rem",
          marginTop: "2rem",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h6" fontWeight="bold">
            All Active Employees
          </Typography>

          <Paper
            component="form"
            sx={{
              p: "4px 12px",
              display: "flex",
              alignItems: "center",
              width: 300,
              borderRadius: "50px",
              border: "1px solid #ccc",
              boxShadow: "none",
            }}
          >
            <SearchIcon sx={{ color: "#999", mr: 1 }} />
            <InputBase
              placeholder="Enter Employee Name"
              sx={{ flex: 1 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              inputProps={{ "aria-label": "search employees" }}
            />
          </Paper>
        </Box>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            border: "2px solid #e0e0e0",
            borderRadius: "15px",
            padding: "2rem",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Job Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Reporting Manager
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredEmployees.map((emp, index) => (
                <TableRow key={index}>
                  <TableCell>{emp.employeeName}</TableCell>
                  <TableCell>{emp.employeeJobTitle}</TableCell>
                  <TableCell>{emp.employeeManager}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default EmployeeList;

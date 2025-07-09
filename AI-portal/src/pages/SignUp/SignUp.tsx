import { Box, InputBase, Paper, Typography } from "@mui/material";

const SignUp = () => {
  return (
    <Box border={"1px solid black"} borderRadius={"20px"} width={"50%"}>
      <Typography>Sign Up</Typography>

      <Paper elevation={0} component="form">
        <InputBase type="text" placeholder="Enter First Name" />
      </Paper>
    </Box>
  );
};

export default SignUp;

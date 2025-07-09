import { Box } from "@mui/material";
import Profile from "../../../pages/Profile/Profile";

const Content = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EBEAEA",
        borderTopLeftRadius: "3rem",
        minHeight: "100vh",
      }}
    >
      <Profile />
    </Box>
  );
};

export default Content;

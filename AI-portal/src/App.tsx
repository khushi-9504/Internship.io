import { Box } from "@mui/material";
import Sidebar from "./layout/Sidebar/Sidebar";
import RightLayout from "./layout/RightLayout/RightLayout";

const App = () => {
  return (
    <Box sx={{ display: "flex", overflowY: "auto", minHeight: "100vh" }}>
      {/* <MenuAppBar></MenuAppBar> */}
      <Sidebar />
      <RightLayout />
    </Box>
  );
};

export default App;

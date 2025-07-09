import { Box } from "@mui/material";
import TopBar from "./Topbar/TopBar";
import Content from "./MainContent/Content";

const RightLayout = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"}>
      <TopBar />
      <Content />
    </Box>
  );
};

export default RightLayout;

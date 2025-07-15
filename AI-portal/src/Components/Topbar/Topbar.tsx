import { Avatar, IconButton, Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const TopBar = () => {
  const user = useSelector((state: RootState) => state.auth.signUpData);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      px={2}
      py={1}
      bgcolor="white"
      height="64px"
    >
      <IconButton>
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      <Avatar
        alt="User Profile"
        src={user?.profilePic}
        sx={{ width: 40, height: 40 }}
      />
    </Box>
  );
};

export default TopBar;

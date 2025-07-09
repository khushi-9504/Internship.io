import { Avatar, IconButton, Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { UserImage } from "../../../assets";

const TopBar = () => {
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
        src={UserImage}
        sx={{ width: 40, height: 40 }}
      />
    </Box>
  );
};

export default TopBar;

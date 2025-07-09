import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Logo } from "../../assets";
import HomeIcon from "@mui/icons-material/Home";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery("(max-width:1020px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { label: "Dashboard", icon: <HomeIcon /> },
    { label: "Profile", icon: <PersonRoundedIcon /> },
    { label: "Leaves", icon: <FlightTakeoffRoundedIcon /> },
    { label: "Holidays", icon: <CalendarMonthRoundedIcon /> },
    { label: "Employees", icon: <GroupsIcon /> },
    { label: "Policies", icon: <StickyNote2Icon /> },
    { label: "AI Ideas", icon: <LightbulbIcon /> },
  ];

  return (
    <Box
      width={isMobile ? "4rem" : isMedium ? "10rem" : "17%"}
      minWidth={isMobile ? "4rem" : isMedium ? "10rem" : "17%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        borderRight: "1px solid #eee",
      }}
    >
      {/* Top: Logo */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          width={isMobile ? "40px" : isMedium ? "60px" : "100%"}
          style={{
            maxWidth: isMobile ? "40px" : isMedium ? "60px" : "150px",
            height: "auto",
          }}
        />
      </Box>

      {/* Middle: Menu + Logout */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Menu List */}
        <MenuList
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            px: isMobile ? 0 : isMedium ? 1 : 2,
          }}
        >
          {menuItems.map(({ label, icon }) => (
            <MenuItem
              key={label}
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
                px: isMobile ? 0 : 1,
              }}
            >
              <Tooltip title={isMobile ? label : ""} placement="right">
                <Button
                  startIcon={icon}
                  sx={{
                    minWidth: "100%",
                    justifyContent: isMobile ? "center" : "flex-start",
                    textTransform: "capitalize",
                    color: "#333",
                    fontSize: isMobile
                      ? "0.75rem"
                      : isMedium
                      ? "0.85rem"
                      : "1rem",
                    padding: isMobile
                      ? "6px 8px"
                      : isMedium
                      ? "6px 8px"
                      : "8px 16px",
                    whiteSpace: "normal",
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                >
                  {isMobile ? <>{icon}</> : label}
                </Button>
              </Tooltip>
            </MenuItem>
          ))}
        </MenuList>

        {/* Logout Button */}
        <Box sx={{ mb: "2.5rem", textAlign: "center" }}>
          <Button
            variant="contained"
            startIcon={!isMobile && <LogoutIcon />}
            sx={{
              minWidth: isMobile ? "auto" : "10rem",
              borderRadius: "15px",
              px: isMobile ? 1.5 : 4,
              py: 1,
              textTransform: "capitalize",
              fontSize: isMobile ? "1.2rem" : "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              ml: "2rem",
            }}
          >
            {isMobile ? <LogoutIcon /> : "Log out"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

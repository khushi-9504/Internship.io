// import { Box, Button, MenuItem, MenuList } from "@mui/material";
// import { Logo } from "../../assets";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
// import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
// import GroupsIcon from "@mui/icons-material/Groups";
// import StickyNote2Icon from "@mui/icons-material/StickyNote2";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";

// const Sidebar = () => {
//   return (
//     <Box
//       width="17%"
//       minWidth="17%"
//       sx={{
//         border: "1px solid black",
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//       }}
//     >
//       <img
//         src={Logo}
//         width="90%"
//         height="auto"
//         style={{ paddingLeft: "1.5rem", minWidth: "90%" }}
//       />

//       <MenuList
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "left",
//           marginTop: "5rem",
//           paddingLeft: "1rem",
//         }}
//       >
//         <MenuItem sx={{ display: "flex", alignItems: "center" }}>
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               fontSize: "1rem",
//               // "&hover": {
//               //   pointerEvents: "none",
//               // },
//               // "&:focus": {
//               //   outline: "none",
//               // },
//               "&:hover": {
//                 backgroundColor: "transparent",
//               },
//               "&:focus": {
//                 backgroundColor: "transparent",
//                 outline: "none",
//               },
//               "&active": {
//                 backgroundColor: "transparent",
//                 outline: "none",
//               },
//             }}
//             startIcon={<HomeIcon fontSize="large" />}
//           >
//             Dashboard
//           </Button>
//         </MenuItem>
//         <MenuItem>
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//             }}
//             startIcon={<PersonRoundedIcon />}
//           >
//             Profile
//           </Button>
//         </MenuItem>
//         <MenuItem>
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//               color: "gray",
//             }}
//             startIcon={<FlightTakeoffRoundedIcon />}
//           >
//             Leaves
//           </Button>
//         </MenuItem>
//         <MenuItem>
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//             }}
//             startIcon={<CalendarMonthRoundedIcon />}
//           >
//             Holidays
//           </Button>
//         </MenuItem>
//         <MenuItem>
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//             }}
//             startIcon={<GroupsIcon />}
//           >
//             Employees
//           </Button>
//         </MenuItem>
//         <MenuItem>
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//             }}
//             startIcon={<StickyNote2Icon />}
//           >
//             Policies
//           </Button>
//         </MenuItem>
//         <MenuItem>
//           <Button
//             sx={{
//               textTransform: "capitalize",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//             }}
//             startIcon={<LightbulbIcon />}
//           >
//             AI Ideas
//           </Button>
//         </MenuItem>
//       </MenuList>

//       <Button
//         variant="contained"
//         sx={{
//           position: "absolute",
//           bottom: "1rem",
//           justifySelf: "flex-end",
//           marginTop: "10rem",
//           alignSelf: "center",
//           minWidth: "12rem",
//           textTransform: "capitalize",
//           borderRadius: "15px",
//           padding: "10px",
//         }}
//       >
//         Log out
//       </Button>
//     </Box>
//   );
// };

// export default Sidebar;

// import {
//   Box,
//   Button,
//   MenuItem,
//   MenuList,
//   Tooltip,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { Logo } from "../../assets";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
// import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
// import GroupsIcon from "@mui/icons-material/Groups";
// import StickyNote2Icon from "@mui/icons-material/StickyNote2";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";

// const Sidebar = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // sm = 600px

//   const menuItems = [
//     { label: "Dashboard", icon: <HomeIcon fontSize="large" /> },
//     { label: "Profile", icon: <PersonRoundedIcon /> },
//     { label: "Leaves", icon: <FlightTakeoffRoundedIcon />, color: "gray" },
//     { label: "Holidays", icon: <CalendarMonthRoundedIcon /> },
//     { label: "Employees", icon: <GroupsIcon /> },
//     { label: "Policies", icon: <StickyNote2Icon /> },
//     { label: "AI Ideas", icon: <LightbulbIcon /> },
//   ];

//   return (
//     <Box
//       width={isSmallScreen ? "4rem" : "17%"}
//       minWidth={isSmallScreen ? "4rem" : "17%"}
//       sx={{
//         borderRight: "1px solid #ccc",
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//         height: "100%",
//         bgcolor: "#fafafa",
//       }}
//     >
//       {!isSmallScreen && (
//         <img
//           src={Logo}
//           width="90%"
//           height="auto"
//           style={{ paddingLeft: "1.5rem", minWidth: "90%", paddingTop: "1rem" }}
//           alt="Logo"
//         />
//       )}

//       <MenuList
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           marginTop: isSmallScreen ? "2rem" : "5rem",
//           paddingLeft: isSmallScreen ? 0 : "1rem",
//           gap: 1,
//         }}
//       >
//         {menuItems.map(({ label, icon, color }) => (
//           <MenuItem
//             key={label}
//             sx={{
//               display: "flex",
//               justifyContent: isSmallScreen ? "center" : "flex-start",
//             }}
//           >
//             <Tooltip title={isSmallScreen ? label : ""} placement="right">
//               <Button
//                 startIcon={icon}
//                 sx={{
//                   textTransform: "capitalize",
//                   fontSize: "1rem",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: isSmallScreen ? "center" : "flex-start",
//                   color: color || "inherit",
//                   backgroundColor: "transparent",
//                   minWidth: "100%",
//                   "&:hover": {
//                     backgroundColor: "transparent",
//                   },
//                   "&:focus": {
//                     backgroundColor: "transparent",
//                     outline: "none",
//                   },
//                 }}
//               >
//                 {!isSmallScreen && label}
//               </Button>
//             </Tooltip>
//           </MenuItem>
//         ))}
//       </MenuList>

//       <Button
//         variant="contained"
//         sx={{
//           position: "absolute",
//           bottom: "2rem",
//           alignSelf: "center",
//           minWidth: isSmallScreen ? "2rem" : "12rem",
//           textTransform: "capitalize",
//           borderRadius: "15px",
//           padding: isSmallScreen ? "10px" : "10px 20px",
//         }}
//       >
//         {!isSmallScreen ? (
//           "Log out"
//         ) : (
//           <Tooltip title="Log out">
//             <span>🚪</span>
//           </Tooltip>
//         )}
//       </Button>
//     </Box>
//   );
// };

// export default Sidebar;

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
  const isSmall = useMediaQuery(theme.breakpoints.down("sm")); // <600px

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
      width={isSmall ? "4rem" : "17%"}
      minWidth={isSmall ? "4rem" : "17%"}
      sx={{
        borderRight: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        position: "relative", // required for absolute logout button
        bgcolor: "#fafafa",
      }}
    >
      {/* Logo */}
      {!isSmall ? (
        <Box sx={{ p: 2 }}>
          <img
            src={Logo}
            alt="Logo"
            width="100%"
            style={{ maxWidth: "150px" }}
          />
        </Box>
      ) : (
        <Box sx={{ height: "3rem" }} /> // spacing for top padding
      )}

      {/* Menu */}
      <MenuList
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          px: isSmall ? 0 : 2,
        }}
      >
        {menuItems.map(({ label, icon }) => (
          <MenuItem
            key={label}
            sx={{
              display: "flex",
              justifyContent: isSmall ? "center" : "flex-start",
            }}
          >
            <Tooltip title={isSmall ? label : ""} placement="right">
              <Button
                startIcon={!isSmall && icon}
                sx={{
                  minWidth: "100%",
                  justifyContent: isSmall ? "center" : "flex-start",
                  textTransform: "capitalize",
                  color: "#333",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                {isSmall ? icon : label}
              </Button>
            </Tooltip>
          </MenuItem>
        ))}
      </MenuList>

      {/* Logout Button */}
      <Button
        variant="contained"
        startIcon={!isSmall && <LogoutIcon />}
        sx={{
          position: "absolute",
          bottom: "2rem", // stays 2rem from bottom
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: isSmall ? "auto" : "10rem",
          borderRadius: "15px",
          px: isSmall ? 1.5 : 4,
          py: 1,
          textTransform: "capitalize",
        }}
      >
        {isSmall ? <LogoutIcon /> : "Log out"}
      </Button>
    </Box>
  );
};

export default Sidebar;

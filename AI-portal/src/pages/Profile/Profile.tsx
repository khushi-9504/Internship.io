import { Box, Paper, Avatar, Button, Typography } from "@mui/material";
import { UserImage } from "../../assets";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.signUpData);

  if (!user) return null;
  return (
    <Box
      padding={"2.5rem"}
      sx={{ backgroundColor: "#e0e0e0", borderTopLeftRadius: "35px" }}
    >
      <Typography typography={"h6"} fontWeight={"bold"}>
        Account Setting
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
        <Typography typography={"p"} fontWeight={"bold"} fontSize={"1.3rem"}>
          My Profile
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "2px solid #e0e0e0",
            borderRadius: "12px",
            marginTop: "1.5rem",
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              alt="Vishal Singh"
              src={UserImage}
              sx={{ width: 64, height: 64 }}
            />
            <Box>
              <Typography fontWeight="bold">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography color="text.secondary" fontSize="0.9rem">
                {user.role}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="outlined"
            color="primary"
            size="small"
            endIcon={<EditIcon />}
            sx={{ borderRadius: "20px", textTransform: "capitalize" }}
          >
            Edit
          </Button>
        </Paper>

        <Paper
          sx={{ p: 3, mt: 3, border: "2px solid #ddd", borderRadius: 3 }}
          elevation={0}
        >
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle2">First Name</Typography>
              <Typography typography="subtitle1">{user.firstName}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Last Name</Typography>
              <Typography>{user.lastName}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Email Address</Typography>
              <Typography>{user.email}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Phone</Typography>
              <Typography>{user.phone}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Bio</Typography>
              <Typography>{user.role}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Date of Joining</Typography>
              <Typography>01/05/2018</Typography>
            </Box>
          </Box>
        </Paper>

        <Paper
          sx={{ p: 3, mt: 3, border: "2px solid #ddd", borderRadius: 3 }}
          elevation={0}
        >
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle2">Country</Typography>
              <Typography typography="subtitle1">{user.country}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">State</Typography>
              <Typography>{user.state}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Postal Code </Typography>
              <Typography>{user.postalCode}</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;

import { Box, Paper, Avatar, Button, Typography } from "@mui/material";
import { UserImage } from "../../assets";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  return (
    <Box padding={"2.5rem"}>
      <Typography typography={"h6"} fontWeight={"bold"}>
        Account Setting
      </Typography>

      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "30px",
          width: "100%",
          height: "100vh",
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
              <Typography fontWeight="bold">Vishal Singh</Typography>
              <Typography color="text.secondary" fontSize="0.9rem">
                UX/UI Developer
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
      </Box>
    </Box>
  );
};

export default Profile;

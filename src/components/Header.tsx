// "use client";

import { Box, Stack, styled, IconButton, Avatar, Divider, List, Drawer, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import {
  KeyboardArrowRight,
  SearchOutlined,
  InboxOutlined,
  NotificationsOutlined,
  HelpOutlineOutlined,
  Menu,
  
} from "@mui/icons-material";
import { useCallback, useState } from "react";
import Sidebar from "./Sidebar";



const Header = () => {
  const [open, setOpen] = useState(false);
  
  const handleClose = useCallback(() => setOpen(false), [])

 
  return (
    <>
    <Navbar>
      <Container>
        <DarkGreenCircle>
          <FadeGreenCircle />
        </DarkGreenCircle>
        <KeyboardArrowRight sx={{ color: "#657372", cursor: "pointer"}} />
      </Container>

      <Container>
        <Stack direction="row" alignItems="center" gap="20px" sx={{
          display: {sm: "flex", xs: "none"}
        }}>
          <SearchOutlined sx={{ color: "#657372", fontSize: "32px" }} />
          <InboxOutlined sx={{ color: "#657372", fontSize: "32px" }} />
          <Notification>
            <NotificationsOutlined
              sx={{ color: "#657372", fontSize: "32px" }}
            />
            <NotificationCircleBox>1</NotificationCircleBox>
          </Notification>
          <HelpOutlineOutlined sx={{ color: "#657372", fontSize: "32px" }} />
          <Profile>
            <img
              src="/images/profile.png"
              alt="profile"
              width={45}
              height={45}
              className="profile-image"
            />
          </Profile>
        </Stack>
        <Box>
        <IconButton sx={{
          display: {sm: "none", xs: "block"}
        }} onClick={() => setOpen(!open)}>
              <Menu />
        </IconButton>
        
            </Box>
      </Container>
      
      
       
    </Navbar>
    {
        open ? <Sidebar handleClose={handleClose} /> : null
      }
    </>
  );
};

const Navbar = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  position: "sticky",
  top: 0,
  zIndex: 100,
  background: "#fff",
  borderBottom: "1px solid #E9EBEB"
});

const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const DarkGreenCircle = styled(Box)({
  backgroundColor: "#04433B",
  width: "37.98px",
  height: "38px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const FadeGreenCircle = styled(Box)({
  backgroundColor: "#00B686",
  width: "23.99px",
  height: "24px",
  borderRadius: "50%",
});

const Notification = styled(Box)({
  position: "relative",
  display: "flex",
});

const NotificationCircleBox = styled(Box)({
  background: "#F97777",
  width: "17px",
  height: "17px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "-4px",
  right: "0px",
  color: "white",
  fontSize: "9px",
  textAlign: "center",
  fontWeight: 700,
});

const Profile = styled(Box)({
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  border: "1px solid #D3D7D7",
});

const SliderValueLabel = styled(Box)({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",	
})



export default Header;
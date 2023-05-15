// "use client";

import { Box, Stack, styled } from "@mui/material";
import {
  KeyboardArrowRight,
  SearchOutlined,
  InboxOutlined,
  NotificationsOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";


const Header = () => {
  return (
    <Navbar>
      <Container>
        <DarkGreenCircle>
          <FadeGreenCircle />
        </DarkGreenCircle>
        <KeyboardArrowRight sx={{ color: "#657372" }} />
      </Container>

      <Container>
        <Stack direction="row" alignItems="center" gap="20px">
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
      </Container>
    </Navbar>
  );
};

const Navbar = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  position: "sticky",
  top: 0,
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

export default Header;
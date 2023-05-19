// "use client";

import {
  DeleteOutlineOutlined,
  MessageOutlined,
  ShareOutlined,
  South,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { Box, Divider, Stack, Typography, styled, IconButton } from "@mui/material";
import VerticalAlignBottomOutlinedIcon from "@mui/icons-material/VerticalAlignBottomOutlined";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';
type Overview = {
  label: string;
};

const BasicInfo = () => {
  const overviews: Overview[] = [
    { label: "Welcome" },
    { label: "Product Capabilities" },
    { label: "Customer Success Stories" },
    { label: "File Sharing" },
    { label: "Our Deck" },
  ];

  return (
    <Stack direction="row" gap="14px" marginTop="14px">
      <Container1 sx={{display: {md: "block", xs:" none"}}}>
        <Typography
          fontSize={"18px"}
          fontWeight={700}
          lineHeight={"16px"}
          color="#657372"
          marginBottom={"10px"}
        >
          Overview
        </Typography>
        <Divider />

        <Stack justifyContent="space-between" >
          {overviews.map((overview, index) => {
            return (
              <Box
                key={overview.label}
                sx={{ background: "#fff", margin: "10px 0", cursor: "pointer"}}
              >
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  lineHeight={"16.3px"}
                  color="#7B8786"
                  marginBottom={"10px"}
                >
                  {overview.label}
                </Typography>
                {index === overviews.length - 1 ? null : (
                  <Divider sx={{ color: "#E9EBEB" }} />
                )}
              </Box>
            );
          })}
        </Stack>
      </Container1>

      <Container2>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom="16px"
        >
          <Typography
            fontWeight={700}
            fontSize={"25px"}
            lineHeight={"20.25px"}
            color="#233735"
          >
            Company Profile
          </Typography>
          

          <Box
            borderRadius={"5px"}
            border="1px solid #D3D7D7"
            width="132px"
            height={"34px"}
            alignItems="center"
            justifyContent="space-between"
            sx={{ display: {md: "flex", xs: "none"}}}
          >
            <South sx={{ color: "#657373" }} />
            <Box
              height="17px"
              bgcolor="#D3D7D7"
              border="1px solid #D3D7D7"
              width="1px"
            />
            <VisibilityOffOutlined sx={{ color: "#657373" }} />
            <Box
              height="17px"
              bgcolor="#D3D7D7"
              border="1px solid #D3D7D7"
              width="1px"
            />
            <DeleteOutlineOutlined sx={{ color: "#657373" }} />
          </Box>

          <IconButton sx={{ display: {md: "none", xs: "block"}}}>
            <MoreVertIcon />
          </IconButton>
        </Stack>

        <ImageContainer>
          <IconContainer>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginTop= "4px"
              padding= "0 2px"
            >
              <Box display="flex" alignItems="center" gap="4px">
                <InsertDriveFileOutlinedIcon sx={{ color: "#657372" }} />
                <Typography>1/15</Typography>
              </Box>
              <Box
                height="17px"
                bgcolor="#D3D7D7"
                border="1px solid #D3D7D7"
                width="1px"
              />
              <VerticalAlignBottomOutlinedIcon sx={{ color: "#657372" }} />
              <Box
                height="17px"
                bgcolor="#D3D7D7"
                border="1px solid #D3D7D7"
                width="1px"
              />
              <ZoomOutOutlinedIcon sx={{ color: "#657372" }} />
              <Box
                height="17px"
                bgcolor="#D3D7D7"
                border="1px solid #D3D7D7"
                width="1px"
              />
              <ZoomInOutlinedIcon sx={{ color: "#657372" }} />
              <Box
                height="17px"
                bgcolor="#D3D7D7"
                border="1px solid #D3D7D7"
                width="1px"
              />
              <OpenInNewOutlinedIcon sx={{ color: "#657372" }} />
            </Stack>
          </IconContainer>

          <InfoContainer sx={{ width: {md: "420px"}}} >
            <Typography fontWeight="700" fontSize="52px" textAlign={"center"}>
              wework
            </Typography>
            <Typography fontWeight="700" fontSize={"20px"} textAlign={"center"}>
              For all the ways you work, we&#39;re here
            </Typography>
          </InfoContainer>
        </ImageContainer>

        <Stack direction={"row"} gap="20px" marginTop="16px">
          <MessageIcon>
            <MessageOutlined sx={{ color: "#657372" }} />
            <Message>1</Message>
          </MessageIcon>
          <ShareOutlined sx={{ color: "#657372" }} />
        </Stack>
      </Container2>
    </Stack>
  );
};

const Container1 = styled(Box)({
  width: "198px",
  height: "290px",
  borderRadius: "10px",
  padding: "10px",
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
});

const Container2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

const ImageContainer = styled(Box)({
  width: "100%",
  height: "400px",
  backgroundImage: `url("/images/wework-info.png")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "5px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const IconContainer = styled(Box)({
  width: "287px",
  height: "38px",
  borderRadius: "5px",
  background: "rgba(255, 255, 255, 0.7);",
  position: "absolute",
  top: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  border: "1px solid #D3D7D7",
  backdropFilter: "blur(5px)"
});

const InfoContainer = styled(Box)({
  height: "160.39px",
  borderRadius: "5px",
  background: "rgba(255, 255, 255, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 10px"
  
});

const MessageIcon = styled(Box)({
  position: "relative",
});

const Message = styled(Box)({
  background: "#00B686",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "-12px",
  right: "-4px",
  color: "white",
  fontSize: "9px",
  textAlign: "center",
  fontWeight: 700,
});

export default BasicInfo;

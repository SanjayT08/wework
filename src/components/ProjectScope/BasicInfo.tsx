// "use client";

import {
  DeleteOutlineOutlined,
  MessageOutlined,
  ShareOutlined,
  South,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";

type Overview = {
  label: string;
};

const BasicInfo = () => {
  const [overviews, setOverviews] = useState<Overview[]>([
    { label: "Welcome" },
    { label: "Product Capabilities" },
    { label: "Customer Success Stories" },
    { label: "File Sharing" },
    { label: "Our Deck" },
  ]);

  return (
    <Stack direction="row">
      <Container1>
        <Typography
          fontSize={"18px"}
          fontWeight={700}
          lineHeight={"16px"}
          color="#657372"
        >
          Overview
        </Typography>

        <Stack>
          {overviews.map((overview, index) => {
            return (
              <Box key={overview.label}>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                  lineHeight={"16.3px"}
                  color="#7B8786"
                  marginBottom={"10px"}
                >
                  {overview.label}
                </Typography>
                <Divider />
              </Box>
            );
          })}
        </Stack>
      </Container1>

      <Container2>
        <Stack>
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
          >
            <South sx={{ color: "#657373" }} />
            <VisibilityOffOutlined sx={{ color: "#657373" }} />
            <DeleteOutlineOutlined sx={{ color: "#657373" }} />
          </Box>
        </Stack>

        <ImageContainer>
          <IconContainer></IconContainer>

          <InfoContainer>
            <Typography fontWeight="700" textAlign={"center"}>
              wework
            </Typography>
            <Typography
              fontWeight="700"
              fontSize={"20px"}
              lineHeight="82.68px"
              textAlign={"center"}
            >
              For all the ways you work, we&#39;re here
            </Typography>
          </InfoContainer>
        </ImageContainer>
      </Container2>

      <Stack direction={"row"} gap="20px">
        <MessageIcon>
          <MessageOutlined sx={{ color: "#657372" }} />
          <Message>1</Message>
        </MessageIcon>
        <ShareOutlined sx={{ color: "#657372" }} />
      </Stack>
    </Stack>
  );
};

const Container1 = styled(Box)({
  width: "198px",
  height: "290px",
  borderRadius: "10px",
  padding: "10px",
});

const Container2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
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
});

const IconContainer = styled(Box)({
  width: "287px",
  height: "38px",
  borderRadius: "5px",
  background: "#D3D7D7",
  position: "absolute",
  top: "4px",
  left: "50%",
  transform: "translateX(-50%)",
});

const InfoContainer = styled(Box)({
  width: "287px",
  height: "38px",
  borderRadius: "5px",
  background: "#D3D7D7",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%)",
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
  top: "-4px",
  right: "0px",
  color: "white",
  fontSize: "9px",
  textAlign: "center",
  fontWeight: 700,
});

export default BasicInfo;
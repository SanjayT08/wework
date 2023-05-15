// "use client"

import { Add } from "@mui/icons-material";
import { Box, Button, Stack, Typography, styled } from "@mui/material";


const Banner = () => {
  return (
    <Stack>
      <TopContainer>
        <H2>WeWork + Salesforce</H2>
        <GreenButton variant="contained">Publish/Share</GreenButton>
      </TopContainer>

      <ImageContainer>
        <Typography
          fontSize="48.88px"
          paddingRight={"5rem"}
          fontWeight="900"
          lineHeight={"48.88px"}
          color="#000000"
        >
          <span>Workspace</span>
          <br />
          <span>Proposal</span>
        </Typography>

        <BannerCard>
          <Stack direction="row" alignItems="center" gap="14px" >
            <img
              src="/images/wework.png"
              alt="wework"
              width={77}
              height={77}
            />
            <Add sx={{ color: "#8C8C8C" }} />
            <img
              src="/images/salesforce.png"
              alt="salesforce"
              width={77}
              height={77}
            />
          </Stack>
        </BannerCard>
      </ImageContainer>
    </Stack>
  );
};

const TopContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const H2 = styled(Typography)({
  fontSize: "35px",
  lineHeight: "42.63px",
  fontWeight: 800,
  color: "#04433B",
});

const GreenButton = styled(Button)({
  background: "#00B686",
  borderRadius: "5px",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontWeight: 700,
  textAlign: "center",
  lineHeight: "100px",
  width: "147px",
  height: "40px"
});

const ImageContainer = styled(Box)({
  backgroundImage: `url("/images/banner.png")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative",
  height: "200px",
});

const BannerCard = styled(Box)({
  width: "246px",
  height: "101px",
  borderRadius: "10px",
  background: "white",
  position: "absolute",
  left: "10px",
  bottom: "-20px",
  padding: "10px"
});

export default Banner;
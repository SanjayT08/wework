// "use client"

import { Add } from "@mui/icons-material";
import { Box, Button, Stack, Typography, styled } from "@mui/material";


const Banner = () => {

  return (
    <Stack padding= "20px">
      <TopContainer>
        <H2 sx={{ fontSize: {md: "35px", sm: "25px", xs: "18px"} }}>WeWork + Salesforce</H2>
        <GreenButton variant="contained">Publish/Share</GreenButton>
      </TopContainer>

      <ImageContainer>
        <WhiteContainer sx={{ width: {md: "629px"}, backgroundImage: {md: `url("/images/rectangle.png")`} }}>
        <Typography
          sx={{ fontSize: {md: "48.88px", xs: "29.05px", }, lineHeight: {md: "48.88px", xs: "31.08px" }}}
          
          fontWeight="900"
          color="#000000"
        
        >
          <span>Workspace</span>
          <br />
          <span>Proposal</span>
        </Typography>
        </WhiteContainer>

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
  height: "40px",
  textTransform: "capitalize",
  '&:hover': {
    background: "#00B686",
  }
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
  height: "191px",
  marginTop: "20px",
  borderRadius: "10px",
});

const WhiteContainer = styled(Box)({
  background: "transparent",
  height: "100%",
  position: "absolute",
  right: 0,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  

})

const BannerCard = styled(Box)({
  width: "246px",
  height: "101px",
  borderRadius: "10px",
  background: "white",
  position: "absolute",
  left: "20px",
  bottom: "-40px",
  padding: "10px"
});

export default Banner;
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Stack, Typography } from "@mui/material";
import BasicInfo from "./BasicInfo";
import Files from "./Files";
import Contact from "./Contact";
import MutualActionPlan from "./MutualActionPlan";


interface TabData {
  label: string;
  value: string;
}

const tabs: TabData[] = [
  { label: "Basic Info", value: "1" },
  { label: "Files", value: "2" },
  { label: "Mutual Action Plan", value: "3" },
  { label: "Contact", value: "4" },
];

export default function ProjectScope() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack padding="20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          fontSize={"25px"}
          lineHeight={"100px"}
          fontWeight={700}
          color="#233735"
        >
          Project Scope Recap
        </Typography>
        <Box display={"flex"} flexDirection="column" width="250px">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              fontSize={"16px"}
              lineHeight={"20.25px"}
              fontWeight={400}
              color="#7B8786"
            >
              Mutual Action Plan
            </Typography>
            <Typography
              fontSize={"18px"}
              lineHeight={"29px"}
              fontWeight={800}
              textAlign="right"
              color="#00B686"
            >
              3%
            </Typography>
          </Stack>

          <Stack direction="row" alignItems={"center"} width="100%">
            {[...new Array(17)].map((_, index) => {
              return (
                <Box
                  key={index}
                  width="100%"
                  height="8px"
                  marginRight={"2px"}
                  marginTop={"4px"}
                  borderRadius={`${index === 0 && "100px 0px 0px 100px" }`}
                  sx={{ 
                    background: index === 0 ? "#00B686" : "#D3D7D7",
                   }}
                ></Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TabList
              sx={{
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    border: "1px solid #BDC3C2",
                    textTransform: "capitalize",
                    borderBottom: "none",
                    marginLeft: "8px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    "&.Mui-selected": {
                      color: "#00B686",
                    },
                  }}
                />
              ))}
            </TabList>
            <Button
              sx={{
                border: "1px solid #BDC3C2",
                color: "#657372",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                borderBottom: "none",
                textAlign: "center",
                display: {sm: "block", xs: "block"},
                textTransform: "capitalize",
              
              }}
            >
              Internal Actions
            </Button>
          </Box>
          <TabPanel value="1">
            <BasicInfo />
          </TabPanel>
          <TabPanel value="2">
            <Files />
          </TabPanel>
          <TabPanel value="3">
            <MutualActionPlan />
          </TabPanel>
          <TabPanel value="4">
            <Contact />
          </TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
}

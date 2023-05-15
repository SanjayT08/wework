import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Stack, Typography } from "@mui/material";

export default function ProjectScope() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Box>
        <Typography
          fontSize={"25px"}
          lineHeight={"100px"}
          fontWeight={700}
          color="#233735"
        >
          Project Scope Recap
        </Typography>
        <Box>
          <Typography
            fontSize={"16px"}
            lineHeight={"20.25px"}
            fontWeight={400}
            color="#7B8786"
          >
            Mutual Action Plan
          </Typography>
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
              <Tab
                label="Item One"
                value="1"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  "&.Mui-selected": {
                    border: "1px solid #BDC3C2",
                    color: "#00B686",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    borderBottom: "none",
                  },
                }}
              />
              <Tab
                label="Item Two"
                value="2"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  "&.Mui-selected": {
                    border: "1px solid #BDC3C2",
                    color: "#00B686",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    borderBottom: "none",
                  },
                }}
              />
              <Tab
                label="Item Three"
                value="3"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  "&.Mui-selected": {
                    border: "1px solid #BDC3C2",
                    color: "#00B686",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    borderBottom: "none",
                  },
                }}
              />
            </TabList>
            <Button
              sx={{
                border: "1px solid #BDC3C2",
                color: "#657372",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                borderBottom: "none",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Internal Actions
            </Button>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
}
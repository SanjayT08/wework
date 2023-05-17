import  { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Drawer,
  Typography
} from "@mui/material";
import {
  Notifications,
  Menu,
  Help,
  Inbox,
  Search
} from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  menuSliderContainer: {
    width: 250,
    // background: "#511",
    height: "100%"
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: "90px",
    height: "45px"
  },
  listItem: {
    color: "tan"
  }
}));

const listItems = [
  {
    listIcon: <Search />,
    listText: "Search"
  },
  {
    listIcon: <Inbox />,
    listText: "Inbox"
  },
  {
    listIcon: <Notifications />,
    listText: "Notifications"
  },
  {
    listIcon: <Help />,
    listText: "Help"
  }
];


export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="/images/profile.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
      
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
              { index === 2 && <Box sx={{

              }}>25</Box> }
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
          
      
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Drawer open={open} onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
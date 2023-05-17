import {
  Box,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import { Notifications, Help, Inbox, Search, Close } from "@mui/icons-material";

interface ListItem {
  listIcon: JSX.Element;
  listText: string;
}

const listItems: ListItem[] = [
  {
    listIcon: <Search />,
    listText: "Search",
  },
  {
    listIcon: <Inbox />,
    listText: "Inbox",
  },
  {
    listIcon: <Notifications />,
    listText: "Notifications",
  },
  {
    listIcon: <Help />,
    listText: "Help",
  },
];

interface SidebarProp {
  handleClose: () => void
}


const Sidebar = ({ handleClose }:  SidebarProp) => {
  return (
    <SidebarContainer>
      <CloseIcon onClick={handleClose}>
        <Close />
      </CloseIcon>
      <Stack direction="row" alignItems="center" gap="20px" marginTop="80px" padding="10px 0">
        <Profile>
          <img src="/images/profile.png" alt="profile" width="100%" height="100%" style={{ borderRadius: "50%"}} />
        </Profile>
        <Stack>
          <Typography fontWeight="700" fontSize="16px" lineHeight={"15.83px"} color="#233735">Jone Smith</Typography>
          <Typography fontWeight="400" fontSize="12px" lineHeight={"15.83px"} color="#7B8786">Sales Executive</Typography>
        </Stack>
      </Stack>
      <Divider   />
      <List>
        {listItems.map((listItem, index) => (
          <Box key={index}>
            <ListItem >
          <ListItemIcon>{listItem.listIcon}
          {index === 2 && <NotificationCircleBox>25</NotificationCircleBox>}
          </ListItemIcon>
          <ListItemText primary={listItem.listText} />
          
          
        </ListItem>
        <Divider sx={{ margin: "6px 0"}}  />
          </Box>
        
        ))}
      </List>
    </SidebarContainer>
  );
};

const SidebarContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  background: "white",
  zIndex: 999,
  padding: "20px 80px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,

 
});

const CloseIcon = styled(IconButton)({
  position: "absolute",
  top: "10px",
  right: "10px"
})

const Profile = styled(Box)({
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  border: "1px solid #D3D7D7"
})

const NotificationCircleBox = styled(Box)({
  background: "#F97777",
  width: "17px",
  height: "17px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "4px",
  left: "26px",
  color: "white",
  fontSize: "9px",
  textAlign: "center",
  fontWeight: 700,
});

export default Sidebar;

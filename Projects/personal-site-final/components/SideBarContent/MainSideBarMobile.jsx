import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState } from "react";

import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  ContactPage,
  HomeOutlined,
  Info,
  ListAltOutlined,
} from "@mui/icons-material";

export default function MainSideBarMobile() {
  const [open, setOpen] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Francisco Gonzalez
          </Typography>
        </Toolbar>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItemButton href="/">
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton href="/about">
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton href="/projects">
              <ListItemIcon>
                <ListAltOutlined />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton href="/contact">
              <ListItemIcon>
                <ContactPage />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { HeaderStyled, StyledRouterLink } from "./style";
import { Icon } from "@mui/material";
import { APP_ROUTES } from "../../constants";
import IconDiolog from "../layout/IconDiolog";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Link } from "react-router-dom";

const drawerWidth = 320;

const navItems = [
  { title: "Main Page", to: APP_ROUTES.MAIN },
  { title: "Categories", to: APP_ROUTES.CATEGORIES },
  { title: "All products", to: APP_ROUTES.PRODUCTS },
  {
    title: "All sales",
    to: APP_ROUTES.SALES,
    sales: {
      sale: true,
    },
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />

      <List>
        {navItems.map((item) => (
          <StyledRouterLink
            to={item.to}
            key={item.title}
            color="000"
            textDecoration="none"
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </StyledRouterLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderStyled component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>

          <Icon
            sx={{
              height: "70px",
              width: "70px",
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
          >
            <IconDiolog />
          </Icon>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <StyledRouterLink
                key={item.title}
                to={item.to}
                state={item.sales}
                activeclassame="active"
              >
                {item.title}
              </StyledRouterLink>
            ))}
          </Box>
          <Link to="/cart">
            <Box
              sx={{
                my: 3,
                "& svg": {
                  color: "#339933",
                  fontSize: "70px",
                  cursor: "pointer",
                  ml: "auto",
                  m: 0,
                },
                "& svg:hover": {
                  color: "gold",
                  transform: "translateX(5px)",
                  transition: "all 400ms",
                },
              }}
            >
              <RestoreFromTrashIcon />
            </Box>
          </Link>
        </Toolbar>
      </HeaderStyled>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;

import React, { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import TopLayout from "./TopLayout";
import { withStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            variant="h6"
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              justifySelf: "center",
            }}
          >
            <Link to="about us" smooth={true}>
              Final Iteration
            </Link>
          </Button>
          <Button
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <Link to="about us" smooth={true}>
              Final Iteration
            </Link>
          </Button>
          <TopLayout />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="background" smooth={true}>
                  Background
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="scope" smooth={true}>
                  Scope
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="solution" smooth={true}>
                  Solution
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="highlights" smooth={true}>
                  Highlights
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="timeline" smooth={true}>
                  Timeline
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="about us" smooth={true}>
                  About Us
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href="https://www.youtube.com/watch?v=_JyGcAqAewQ"
                  target="_blank"
                >
                  Demo
                </a>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    textTransform: "capitalize",
    variant: "h6",
    alignSelf: "center",
  },
})(Typography);

export default ResponsiveAppBar;

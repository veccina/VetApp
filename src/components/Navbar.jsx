import React from 'react';
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReportIcon from '@mui/icons-material/Report';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PeopleIcon from '@mui/icons-material/People';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import vetLogo from '../assets/vetLogo.png';  // Yeni logo dosyasını ekliyoruz

const pages = [
  { name: "Randevu", path: "/appointment", icon: <EventNoteIcon /> },
  { name: "Rapor", path: "/report", icon: <ReportIcon /> },
  { name: "Aşı", path: "/vaccine", icon: <VaccinesIcon /> },
];
const settings = [
  { name: "Müşteri", path: "/customer", icon: <PeopleIcon /> },
  { name: "Hayvan", path: "/animal", icon: <PetsRoundedIcon /> },
  { name: "Doktor", path: "/doctor", icon: <LocalHospitalIcon /> },
];

function Navbar() {
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
    <AppBar position="static" sx={{ backgroundColor: "#2E8B57" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
            <img src={vetLogo} alt="Veterinary Logo" style={{ width: 50, height: 50, borderRadius: "50%" }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              Patika Vet
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: "none", color: "inherit", display: 'flex', alignItems: 'center' }}>
                    {page.icon} <span style={{ marginLeft: 8 }}>{page.name}</span>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: "white", display: "flex", alignItems: "center", backgroundColor: "#2E8B57", borderRadius: 1, '&:hover': { backgroundColor: "#1E6A43" } }}
              >
                <Link to={page.path} style={{ textDecoration: "none", color: "white", display: 'flex', alignItems: 'center' }}>
                  {page.icon} <span style={{ marginLeft: 8 }}>{page.name}</span>
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon sx={{ fontSize: "2.5rem", color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Link to={setting.path} className="navbar-link" style={{ textDecoration: "none", color: "inherit", display: 'flex', alignItems: 'center' }}>
                    {setting.icon} <span style={{ marginLeft: 8 }}>{setting.name}</span>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Button } from '@mui/material'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
          {/* Logo Heading */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              mb: 2,
            }}
          >
            LOGO
          </Typography>
          {/* Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button sx={{ color: 'inherit', mx: 1 }}>SHOP</Button>
            <Button sx={{ color: 'inherit', mx: 1 }}>SKILLS</Button>
            <Button sx={{ color: 'inherit', mx: 1 }}>STORIES</Button>
            <Button sx={{ color: 'inherit', mx: 1 }}>ABOUT</Button>
            <Button sx={{ color: 'inherit', mx: 1 }}>CONTACT US</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
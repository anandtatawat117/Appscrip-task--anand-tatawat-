import React from 'react';
import { AppBar, Container, Typography, InputBase, Button, Box, Grid, List, ListItem, ListItemText } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
function Footer() {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'black', color: 'white', marginTop: 'auto' }}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {/* Left section */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h6" gutterBottom>
                                Be the first to know
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                Sign up for the updates of meta mouse
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <InputBase
                                    placeholder="Enter your email"
                                    sx={{ backgroundColor: 'white', color: 'black', marginRight: 1 }}
                                />
                                <Button variant="contained" color="primary">
                                    Subscribe
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right section */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'right', marginLeft: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                CONTACT US
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', marginBottom: 1 }}>
                                +262729788
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white' }}>
                                customer@gmail.com
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right', marginLeft: 4, marginTop: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                CURRENCY
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', marginBottom: 1 }}>
                                USD
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white' }}>
                                Transactions will be completed in Euros and a currency reference is available on hover
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* White horizontal line */}
            <hr style={{ border: 'none', borderTop: '1px solid white', width: '100%' }} />

            {/* List section */}
            <Container maxWidth="xl" sx={{ paddingLeft: 0 }}>
                <List sx={{ padding: 0 }}>
                    <ListItem>
                        <ListItemText primary="About Us" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Stories" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Artisans" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Boutiques" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Contact Us" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="EU Compliances Docs" />
                    </ListItem>
                </List>
            </Container>

            <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
                <List sx={{ padding: 0 }}>
                    <ListItem>
                        <ListItemText primary="Quick Links" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Orders & Shipping" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Join/Login as a Seller" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Payment & Pricing" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Return & Refunds" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="FAQS" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Privacy Policy" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Terms & Conditions" />
                    </ListItem>
                </List>
            </Container>
            <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Container sx={{ marginLeft: 'auto' }}>
                    <List sx={{ padding: 0 }}>
                        <ListItem>
                            <ListItemText primary="FOLLOW US" />
                        </ListItem>
                        <ListItem>
                            <InstagramIcon />
                        </ListItem>
                        <ListItem>
                            <LinkedInIcon />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="metta muse ACCEPTS" />
                        </ListItem>
                    </List>
                </Container>
            </Container>
        </AppBar>
    )
}

export default Footer
import { Container, Box, Stack, Typography, FormControl, Select, MenuItem, TextField, IconButton, Grid, Alert, AlertTitle } from '@mui/material';

import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

const HomeTest = () => {
    return (
        <Container sx={{ minHeight: 800 }}>
            <Box
                sx={{
                    mt: 2,
                    mb: 5,
                    mx: "auto",
                    backgroundColor: "secondary.main",
                    borderRadius: 2,
                    maxWidth: 800,
                }}
            >
                <Stack
                    direction={{ sm: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{
                        mx: 3,
                        justifyContent: "space-evenly",
                        py: 3,
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                    }}
                >
                    <Box width={{ xs: "100%", md: "30%" }}>
                        <FormControl fullWidth>
                            <Typography
                                sx={{ typography: "body1", fontWeight: "Medium", mb: 1 }}
                            >
                                Sports
                            </Typography>

                        </FormControl>
                    </Box>
                    <Box width={{ xs: "100%", md: "30%" }}>
                        <FormControl fullWidth>
                            <Typography
                                sx={{ typography: "body1", fontWeight: "Medium", mb: 1 }}
                            >
                                Facility
                            </Typography>
                        </FormControl>
                    </Box>
                    <Box width={{ xs: "100%", md: "30%" }}>
                        <FormControl fullWidth>

                        </FormControl>
                    </Box>
                    <Box
                        width={{ xs: "100%", md: "10%" }}
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Grid container direction="column" alignItems="center">
                            <Grid item align="center">
                                <IconButton
                                    color="primary"
                                    aria-label="Filter"

                                    sx={{
                                        borderRadius: "50%",
                                        backgroundColor: "#3563E9",
                                        color: "white",
                                    }}
                                >
                                    <FilterListRoundedIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}

export default HomeTest;
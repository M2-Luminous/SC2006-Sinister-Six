import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import heroImage from '../../images/hero.jpg';

const HeroCard = () => {
    return (
        <Paper className="paperContainer" style={{
            backgroundImage: `url(${heroImage}`, backgroundPosition: "center center", backgroundSize: "cover"
        }} sx={{
            mt: '20px',
            minHeight: 300,
            borderRadius: '20px',
            padding: '4rem',
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
        }}>
            <Grid container sx={{ minHeight: 200 }}>
                <Grid xs={12} justifyContent="center" alignItems="center" style={{ marginBottom: '20px' }}>
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            fontSize: '3rem'
                        }}
                    >
                        Explore new flats, today.
                    </Typography>
                </Grid>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center" style={{ marginTop: '10px', marginBottom: '20px' }}>
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            width:
                            {
                                lg: '50%',
                                md: '70%',
                                xs: '100%',
                            }
                        }}
                        style={{ color: 'white', fontSize: '16px' }}
                    >
                        With top of the line predictive analytics, we can help find the perfect home for you.
                    </Typography>
                </Grid>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center" style={{ marginTop: '10px' }}>
                    <Button variant="contained" href="/filters" color='secondary'>
                        Begin
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default HeroCard;
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link';
import HeroCard from './Boundary/UIElements/HeroCard';
import HouseCards from './Boundary/UIElements/HouseCards';


const Home = () => {
    return (
        <div>
            <Container>
                <HeroCard />
                <div style={{ marginBottom: "10px", marginTop: "50px" }}>
                    <Typography variant="overline" style={{ color: "#9e998b" }}>
                        Find Games to Play
                    </Typography>
                </div>
                {/* {slicedGameList.length !== 0 && <DisplayGameList games={slicedGameList} />} */}

                <Box
                    sx={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
                >
                    <Button
                        component={Link}
                        to={`./explore`}
                        variant="contained"
                        size="large"
                        style={{ minWidth: "80px", minHeight: "30px" }}
                    // endIcon={<NavigateNextIcon />}
                    >
                        Explore More Games
                    </Button>
                </Box>
                <HouseCards />
                <HouseCards />
                <HouseCards />
            </Container>
        </div>
    );
}

export default Home;
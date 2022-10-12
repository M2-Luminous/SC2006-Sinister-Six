import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Home = () => {
    return (
        <div>
            <Container maxWidth="false" align="center" sx={{ mt: 10 }}>

                <Typography variant="h1" color="initial" >Test Home Screen</Typography>
                <Button variant="contained">TEST</Button>
            </Container>
        </div>
    );
}

export default Home;
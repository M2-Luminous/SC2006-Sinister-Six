import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const Test = () => {
    return (

        <div>
            <Container maxWidth="false" align="center" sx={{ mt: 10 }}>
                <Typography variant="h1" color="initial" >Test Home Screen</Typography>
                <Button variant="contained">TEST</Button>
            </Container>
        </div>

    );
}

export default Test;
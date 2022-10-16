import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

import Flat from "./Entity/Flat";

import { getFlats } from "./Controller/DatabaseController";
import HouseCards from "./Boundary/UIElements/HouseCards";

const Test = () => {
    const [flats, setFlats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [flatList, setList] = useState([]);

    useEffect(() => {
        console.log("fetching..");
        (async () => {
            try {
                const flats = await getFlats();
                setList(
                    flats.docs.map(
                        (doc) =>
                            new Flat(
                                doc.id,
                                doc.data().block,
                                doc.data().flat_model,
                                doc.data().flat_type,
                                doc.data().floor_area_sqm,
                                doc.data().lease_commence_date,
                                doc.data().month,
                                doc.data().resale_price,
                                doc.data().storey_range,
                                doc.data().street_name,
                                doc.data().town
                            )
                    )
                );
                console.log("loaded");
                // console.log(flats);
                setLoading(false);
            } catch (err) {
                console.log("Error occured when fetching games" + err);
            }

        })();
    }, []);


    return (

        <div>
            <Container maxWidth="false" align="center" sx={{ mt: 10 }}>
                <Typography variant="h1" color="initial" >Test Home Screen</Typography>
                <Button variant="contained">TEST</Button>
                {loading && <div>Loading...</div>}
                {/* <HouseCards flats={flatList} /> */}
            </Container>
        </div>

    );
}

export default Test;
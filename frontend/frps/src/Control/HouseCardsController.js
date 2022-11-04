import { useState, useEffect } from "react";
import Flat from "../Entity/Flat";
import { getFlats } from "./DatabaseController";

export const GetFlats = async () => {
    return await getFlats();
}

export const FlatDetails = (flatID) => {
    const [flat, setFlat] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const flat = await getFlat(flatID);
                setFlat(
                    new Flat(
                        flat.id,
                        flat.data().block,
                        flat.data().flat_model,
                        flat.data().flat_type,
                        flat.data().floor_area_sqm,
                        flat.data().lease_commence_date,
                        flat.data().month,
                        flat.data().resale_price,
                        flat.data().storey_range,
                        flat.data().street_name,
                        flat.data().town
                    )
                );
                setLoading(false);
            } catch (err) {
                console.log("ERROR" + err);
            }
        })();
    }, [flatID]);
    return { flat, loading };
}
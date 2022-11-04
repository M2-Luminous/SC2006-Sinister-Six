import { useState, useEffect } from "react";
import Flat from "../Entity/Flat";
import { getFeedbacks } from "./DatabaseController";

export const GetFeedbacks = async () => {
    return await getFeedbacks();
}

export const FeedbackList = () => {
    const [feedbackList, setListOfFeedbacks] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const feedbacks = await getFeedbacks();
                setListOfFeedbacks(
                    feedbacks.docs.map(
                        (doc) =>
                            new FeedbackClass(
                                doc.id,
                                doc.data().name,
                                doc.data().email,
                                doc.data().feedback,
                                doc.data().createdAt
                            )
                    )
                );
                console.log("loaded");
                setLoading(false);
            } catch (err) {
                console.log("ERROR" + err);
            }
        })();
    }, []);

    return { feedbackList, loading };
}
import Rating from "../models/Rating.js";

export const getRating = async (req, res) => {
    try {
        const rating = await Rating.findAll();
        
        if (rating) {
            res.send(rating);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

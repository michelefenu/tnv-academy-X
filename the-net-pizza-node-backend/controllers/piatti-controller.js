import Piatto from "../models/piatto.js";

export const getPiatti = async (req, res) => {
    try {
        const piatto = await Piatto.findAll();
        
        if (piatto) {
            res.send(piatto);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getPiatto = async (req, res) => {
    try {
        const piatto = await Piatto.findOne({
            where: {
                id: req.params.id
            }
        });
        
        if (piatto) {
            res.send(piatto);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const addPiatto = async (req, res) => {
    try {
        const piatto = await Piatto.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Piatto Created",
            data: piatto
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updatePiatto = async (req, res) => {
    try {
        const piatto = await Piatto.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Piatto Updated",
            data: piatto
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deletePiatto = async (req, res) => {
    try {
        await Piatto.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Piatto Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

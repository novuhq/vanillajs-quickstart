import { inAppNotification, createSub } from "../novu/novu.js";

export const createNotif = async (req, res) => {
    const { description } = req.body
    try {
        // await createSub();
        await inAppNotification(description);
        res.status(201).json({message:'success',description:description});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
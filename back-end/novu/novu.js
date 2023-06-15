import { Novu } from '@novu/node';
import circularJson from 'circular-json'

export const createSub = async (req, res) => {
    const novu = new Novu(process.env.NOVU_API_KEY);
    try {
        // Call Novu SDK to create the subscriber with id = 789
        const subscriber = await novu.subscribers.identify('789', {
            firstName: 'Sumit',
            lastName: 'Saurabh',
            returnUser: true,
        });
        // Return the subscriber ID in JSON response
        res.status(200).json(circularJson.stringify(subscriber));

    } catch (error) {
        res.status(500).json(circularJson.stringify({ message: error.message }));
    }
}

export const inAppNotification = async (description) => {
    const novu = new Novu(process.env.NOVU_API_KEY);
    console.log("inapp ", process.env.NOVU_API_KEY);
    await novu.subscribers.identify('789', {
        firstName: "inAppSubscriber",
    });

    novu.trigger('quickstart', {
        to: {
            subscriberId: '789'
        },
        payload: {
            description: description
        }
    });
};
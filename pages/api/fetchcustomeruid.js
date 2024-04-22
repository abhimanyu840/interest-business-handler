import customers from "../../models/customers";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let customer = await customers.find(
            { uid: req.body.uid, }
        )
        res.status(200).json({ customer })

    }
}

export default connectDb(handler)
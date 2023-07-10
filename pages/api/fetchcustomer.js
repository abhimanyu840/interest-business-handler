import customers from "../../models/customers";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    let customer = await customers.find()
    res.status(200).json({ customer })
}

export default connectDb(handler)
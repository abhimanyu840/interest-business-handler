import customers from "../../models/customers";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { _id, cname, gname, address, pamount, slug, date, paidtill } = req.body;
    let customer = await customers.findById({ _id });
    await customer.update({cname, gname, address, pamount, slug, date, paidtill});
    // await customer.update();
    res.status(200).json({ success: "success" })
  }
  else {
    res.status(400).json({ error: "Method not allowed" })
  }
  }

export default connectDb(handler)
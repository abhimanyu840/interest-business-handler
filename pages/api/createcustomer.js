import customers from "../../models/customers";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { cname, gname, address, pamount, slug, date, paidtill } = req.body;
    let customer = new customers({ cname, gname, address, pamount, slug, date, paidtill })
    await customer.save()
    res.status(200).json({ success: "success",_id:customer._id, cname: customer.cname, gname: customer.gname, address: customer.address, pamount: customer.pamount, slug: customer.slug, date: customer.date, paidtill: customer.paidtill }) 
  }
  else {
    res.status(400).json({ error: "Method not allowed" })
  }
  }

export default connectDb(handler)
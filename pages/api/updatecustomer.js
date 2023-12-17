import customers from "../../models/customers";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { _id, pamount, paidamount, paidinterest, paidfine, total, paidtill } = req.body;

    const paidamountArray = Array.isArray(paidamount) ? paidamount : [paidamount];
    const paidinterestArray = Array.isArray(paidinterest) ? paidinterest : [paidinterest];
    const paidfineArray = Array.isArray(paidfine) ? paidfine : [paidfine];
    const totalArray = Array.isArray(total) ? total : [total];

    try {
      let customer;
      if (!paidamount) {
        customer = await customers.findByIdAndUpdate(
          _id,
          {
            $push: {
              paidinterest: { $each: paidinterestArray.map(value => ({ amount: value })) },
              paidfine: { $each: paidfineArray.map(value => ({ amount: value })) },
              total: { $each: totalArray.map(value => ({ amount: value })) },
            },
            paidtill,
            pamount,
          },
          { new: true }
        );
      } else if (paidamount) {
        customer = await customers.findByIdAndUpdate(
          _id,
          {
            $push: {

              paidamount: { $each: paidamountArray.map(value => ({ amount: value })) },
            },
            pamount,
          },
          { new: true }
        );
      }

      if (!customer) {
        return res.status(404).json({ success: 'error', message: 'Customer not found' });
      }

      return res.status(200).json({ success: 'success', customer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: 'error', message: 'Internal Server Error' });
    }
  } else {
    res.status(400).json({ error: 'Method not allowed' });
  }
};

export default connectDb(handler);

import { User } from "../models/User";

export default findAll = async (req, res) => {
  try {
    const res = await User.findAndCountAll();
    return res.json({
        error:null,
        data:res.rows,
    })
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: error,
    });
  }
};

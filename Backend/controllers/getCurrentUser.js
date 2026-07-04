import User from "../models/userModel.js";

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json(user);

    } catch (error) {
        console.log(error);
    }
};
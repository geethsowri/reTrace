const User = require("../models/userModel");
const viewProfile = (req, res) => {
  const { email, firstName, lastName } = req.user;
  res.status(200).json({
    message: "Profile fetched successfully.",
    data: { email, firstName, lastName },
  });
};

const updateProfile = async (req, res) => {
  const loggedUser = req.user;
  const { firstName, lastName } = req.user;
  if (!firstName) {
    res.status(422).json({
      message: "First name is required.",
    });
  }
  if (firstName.length > 50 || lastName.length > 50) {
    return res.status(422).json({
      message: "First Name and Last Name length should be less than 50.",
    });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      loggedUser._id,
      {
        firstName,
        lastName,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Profile Updated Successfully.",
      data: {
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
      },
    });
  } catch (error) {
    console.error("Error updating profile: ", error);
    res.status(500).json({
      message: "Something went wrong, Please try again later.",
    });
  }
};

module.exports = { viewProfile, updateProfile };

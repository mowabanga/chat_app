import jwt from "jsonwebtoken";

const generateTokenCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000,
    httpOnly: true, // Prevent XXS attacks
    sameSite: "strict", // prevent CSRF attacks
  });
};

export default generateTokenCookie;

import jwt from "jsonwebtoken";

const generateTokenCookie = (userId, res) => {
  const token = jwt.sign({ userId });
};

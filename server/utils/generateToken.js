import jwt from "jsonwebtoken";

const generateToken = (res, _id) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;

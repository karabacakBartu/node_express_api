import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET_KEY;
const refreshSecret = process.env.REFREFSH_SECRET_KEY;

export function payload(user, res) {
  const payload = {
    _id: user._id.toHexString(),
    email: user.email,
    phoneNumber: user.phoneNumber,
  };
  const expires = { expiresIn: "1h" };
  const refreshExpires = { expiresIn: "1d" };
  const accessToken = jwt.sign(payload, secret, expires);
  const refreshToken = jwt.sign(payload, refreshSecret, refreshExpires);
  return res.json({ accessToken: accessToken, refreshToken: refreshToken });
}

export async function auhtenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log(authHeader, "autheader");
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    console.log(token, "token");

    jwt.verify(token, secret, (err, user) => {
      console.log(err, "err");
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

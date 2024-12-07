import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    console.log("SECRET_KEY during login:", process.env.SECRET_KEY);
    console.log("SECRET_KEY in isAuthenticated:", process.env.SECRET_KEY);

    console.log("Decoded Token:", decode);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log("Authentication Error:", error); // Log errors
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
export default isAuthenticated;

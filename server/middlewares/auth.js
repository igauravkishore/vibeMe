 exports={}
 const jwt= require("jsonwebtoken");
exports.authorizationMiddeleware = async (req, res, next) => {
    const authorizationHeader = req.header("Authorization");
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid authorization header" });
    }
    const token = authorizationHeader.replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Authorization token not found" });
    }
    
    try {
        console.log(token)
      const decoded = jwt.verify(token,'HimanshuGoel');
      console.log(decoded);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  };
  module.exports= exports;
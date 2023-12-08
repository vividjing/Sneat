const jsonwebtoken = require("jsonwebtoken");

const jwtVerify = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401).json("Please login");
  const token = authHeader.split(" ")[1];
  console.log(token);

  jsonwebtoken.verify(token, "a1aqwerqsf", (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};

module.exports = jwtVerify;

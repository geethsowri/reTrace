const jwt = require("jsonwebtoken");
const generateToken = (_id, res) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    expires: new Date(Date.now + 7 * 24 * 60 * 60 * 1000), // why? because we want the token to expire after 7 days, so that the user has to log in again after that period.
    httpOnly: true, // why? because we want to prevent client-side scripts from accessing the token, which helps protect against cross-site scripting (XSS) attacks.
    secure: true,
    sameSite: "None", // why? because we want to allow cross-site requests, which is common in modern web applications.
  });
};

module.exports = generateToken;

// so what this code does is it generates a token using the jwt library. it takes an id and a response object as parameters. it signs the id with a secret key and sets an expiration time of 7 days. then, it sends the token back to the client as a cookie named "token". this cookie is set to be secure, httpOnly, and has a sameSite policy of "None", which means it can be sent in cross-site requests.

// if i had to explain this code to a 5 year old, i would say:
// this code is like a magic key that lets you into a special club. it takes your name (the id) and makes a secret key (the token) that only you can use. then, it gives you this key in a cookie (like a yummy treat) that you can keep safe. this way, when you come back to the club, you can show your key and get in again without having to knock on the door every time.
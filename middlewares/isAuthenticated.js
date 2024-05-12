const isAuthenticated = (req, res, next) => {
  // Check if the user is logged in (e.g., by verifying the presence of a JWT token)
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify the token 
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach user information to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
module.exports = isAuthenticated;

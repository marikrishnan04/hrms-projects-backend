

exports.getMiddleware = (req, res, next) => {
    const allowedOrigin = process.env.MONGODB_URI;
    
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, application/json");
    next();
  };
  
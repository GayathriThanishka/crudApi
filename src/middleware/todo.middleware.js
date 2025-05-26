const apiLogger = (req, res, next) => {
    
    console.log("Middleware Accessed");
     next();
}

export default apiLogger
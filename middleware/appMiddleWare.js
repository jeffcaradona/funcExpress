const fp = require('../models/fp')

exports.initLocals = (appName, object) => {
  return (req, res, next) => {
    // Make a place for all out "global" objects:
    // Make a place for the the response information to go we can control:
    res.locals = fp.addObject(res.locals, appName, object); 
    // Finally, sincce we're going to use lots of promises, let's made a promise array
    res.locals[appName] = fp.addObject(res.locals[appName], "aryPromises", []);
    res.locals[appName] = fp.addObject(res.locals[appName], "aryResponses", []);    
    next();
  };
};

exports.showLocals = (req, res, next) => {
  console.info("res.locals", res.locals);
  console.info("req.app.locals", req.app.locals);
  next();
};







exports.allSettled = (req, res, next) =>
  Promise.allSettled(res.locals.funcexpress.aryPromises)
  .then((responses) => {  
    next();
  })
  .catch(error => next(error));

  
exports.index = function (req, res, next) {
  res.render("index", { title: "Express" });
};

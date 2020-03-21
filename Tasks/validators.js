const helper = require("./helpers");

const validateID = (req, res, next) => {
  const { id } = req.params;
  helper
    .getTask(id)
    .then(resource => {
      if (!resource) {
        res.status(400).json({ messgage: "no resource with id exists" });
      }
      else{
        next();
      }
    })
    .catch(err => res.status(500).json({ messgage: err }));
};

module.exports = {
  validateID
};

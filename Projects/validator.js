const helper = require("./{");

const validateID = (req, res, next) => {
  const { id } = req.params;
  helper
    .getProject(id)
    .then(project => {
      if (!project) {
        res.status(400).json({ messgage: "no project with id exists" });
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

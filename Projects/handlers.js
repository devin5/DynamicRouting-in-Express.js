const helper = require("./helpers");

const getAll = (req, res) => {
  helper
    .getAll()
    .then(projects => res.status(200).send(projects))
    .catch(err => res.status(500).send(err));
};

const getPro = (req, res) => {
  const { id } = req.params;
  helper
    .getProject(id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({ message: err }));
};

const addPro = (req, res) => {
  const { Project_Name, Project_Desc, Project_Comp } = req.body;
  const project = { Project_Name, Project_Desc, Project_Comp };
  helper.addProject(project).then(([id]) => {
    helper
      .getProject(id)
      .then(project => res.status(200).json(project))
      .catch(err => res.status(500).json({ message: err }));
  });
};
const putPro = (req, res) => {
    const {id} = req.params
  const { Project_Name, Project_Desc, Project_Comp } = req.body;
  const project = { Project_Name, Project_Desc, Project_Comp };
  helper.putProject(id, project)
  .then(id => {
    helper
    .getProject(id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({ message: err }));
  })
  .catch(err => res.status(500).json({message: err})) 
  
};

const delPro = (req, res) => {
const {id} = req.params
helper.deleteProject(id)
.then(() => res.status(200).json({message: "successfully deleted"}))
}


module.exports = {
  getAll,
  getPro,
  addPro,
  putPro,
  delPro
};

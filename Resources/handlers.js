const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(resources => res.status(200).send(resources))
    .catch(err => res.status(500).send(err))
}


const getRes = (req, res) => {
    const { id } = req.params;
    helper
      .getResource(id)
      .then(resource => res.status(200).json(resource))
      .catch(err => res.status(500).json({ message: err }));
  };
  
  const addRes = (req, res) => {
    const { Resource_Name, Resource_Desc} = req.body;
    const resource = { Resource_Name, Resource_Desc};
    helper.addResource(resource)
    // .then(x => res.status(200).json(x))
    .then(([id]) => {
      helper
        .getResource(id)
        .then(resource => res.status(200).json(resource))
        .catch(err => res.status(500).json({ message: err }));
    })
    .catch(err => res.status(500).json({ message: err }));
  };
  const putRes = (req, res) => {
      const {id} = req.params
      const { Resource_Name, Resource_Desc} = req.body;
      const resource = { Resource_Name, Resource_Desc};;
    helper.putResource(id, resource)
    .then(() => {
      helper
      .getResource(id)
      .then(resource=> res.status(200).json(resource))
      .catch(err => res.status(500).json({ message: err }));
    })
    .catch(err => res.status(500).json({message: err})) 
    
  };
  
  const delRes = (req, res) => {
  const {id} = req.params
  helper.deleteResource(id)
  .then(() => res.status(200).json({message: "successfully deleted"}))
  }
  
  
  module.exports = {
    getAll,
    getRes,
    addRes,
    putRes,
    delRes
  };

const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(500).send(err))
}


const getTask = (req, res) => {
    const { id } = req.params;
    helper
      .getTask(id)
      .then(task => res.status(200).json(task))
      .catch(err => res.status(500).json({ message: err }));
  };
  
  const addTask = (req, res) => {
      const {id} = req.params
    const { Task_Name, Task_Comp, Task_Notes} = req.body;
    const task = { Task_Name, Task_Comp,Task_Notes,  Task_Project_ID: id};
    helper.addTask(task)
    // .then(x => res.status(200).json(x))
    .then(([id]) => {
      helper
        .getTask(id)
        .then(task => res.status(200).json(task))
        .catch(err => res.status(500).json({ message: err }));
    })
    .catch(err => res.status(500).json({ message: err }));
  };
  const putTask = (req, res) => {
      const {id} = req.params
      const { Task_Name, Task_Comp, Task_Notes} = req.body;
      const task = { Task_Name, Task_Comp, Task_Notes};
    helper.putTask(id, task)
    .then(() => {
      helper
      .getTask(id)
      .then(task => res.status(200).json(task))
      .catch(err => res.status(500).json({ message: err }));
    })
    .catch(err => res.status(500).json({message: err})) 
    
  };
  
  const delTask = (req, res) => {
  const {id} = req.params
  helper.deleteTask(id)
  .then(() => res.status(200).json({message: "successfully deleted"}))
  }
  
  
  module.exports = {
    getAll,
    getTask,
    addTask,
    putTask,
    delTask
  };

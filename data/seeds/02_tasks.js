exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        { Task_ID: 1, Task_Name: "Make checklist", Task_Notes: "make interactive checklist for all tasks", Task_Project_ID: "1" , Task_Comp: true},
        { Task_ID: 2, Task_Name: "Make poster", Task_Notes: "design a visually asthetic poster", Task_Project_ID: "2"  },
        {
          Task_ID: 3,
          Task_Name: "research pnumonia",
          Task_Notes: "research why corona virus sucks",
          Task_Project_ID: "1" 
        }
      ]);
    });
};

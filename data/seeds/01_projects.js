exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { Project_ID: 1, Project_Name: "The Wall of Chine", Project_Desc: "project about the great wall of china", Project_Comp: true},
        { Project_ID: 2, Project_Name: "CDCC Studies", Project_Desc: "project about CDCC Studies" },
        {
          Project_ID: 3,
          Project_Name: "Edgar allen Poe research",
          Project_Desc: "project about Edgar allen Poe research",
          
        }
      ]);
    });
};

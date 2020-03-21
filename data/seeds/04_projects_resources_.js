exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("_projects_resources_")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("_projects_resources_").insert([
        { _ID: 1, _Pro_ID:1,_Res_ID:1 }
  
      ]);
    });
};

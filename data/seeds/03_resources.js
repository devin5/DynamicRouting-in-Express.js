exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { Resource_ID: 1, Resource_Name: "Alfreds Encylclopedia", Resource_Desc: "A great Book for learning new things" },
        { Resource_ID: 2, Resource_Name: "Verge.com", Resource_Desc: "A website with fringe opinions" },
        {
          Resource_ID: 3,
          Resource_Name: "Interview with Madji Berg",
          Resource_Desc: "My brother with bad ideas"
        }
      ]);
    });
};

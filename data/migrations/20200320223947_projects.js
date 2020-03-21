exports.up = function(knex) {
    return knex.schema.createTable("projects", projects => {
        projects.increments("Project_ID");
        projects.string("Project_Name", 150).notNullable()
        projects.text("Project_Desc", 500).notNullable();
        projects.boolean("Project_Comp").defaultTo(false)

    })
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects");
  };
  
exports.up = function(knex) {
  return knex.schema.createTable("_projects_resources_", _p_y => {
    _p_y.increments("_ID");

    _p_y
      .integer("_Pro_ID")
      .notNullable()
      .unsigned()
      .references("Project_ID")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    _p_y
      .integer("_Res_ID")
      .notNullable()
      .unsigned()
      .references("Resource_ID")
      .inTable("resources")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("_projects_resources_");
};

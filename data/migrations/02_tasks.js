exports.up = function(knex) {
  return knex.schema.createTable("tasks", tasks => {
    tasks.increments("Task_ID");
    tasks.string("Task_Name", 128).notNullable();
    tasks
      .integer("Task_Project_ID")
      .notNullable()
      .unsigned()
      .references("Project_ID")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tasks
      .boolean("Task_Comp")
      .defaultTo(false);
    tasks.string("Task_Notes", 400);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tasks");
};

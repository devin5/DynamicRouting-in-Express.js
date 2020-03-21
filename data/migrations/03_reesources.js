exports.up = function(knex) {
    return knex.schema.createTable("resources", resources => {
        resources.increments("Resource_ID");
        resources
        .string("Resource_Name", 128)
        .notNullable()
        .unique();
        resources
        .string("Resource_Desc", 128)
        
        
    
    });
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("resources");
  };
  
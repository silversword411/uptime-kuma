exports.up = function (knex) {
    return knex.schema.alterTable("status_page", function (table) {
        table.boolean("compact_mode").notNullable().defaultTo(false);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("status_page", function (table) {
        table.dropColumn("compact_mode");
    });
};


exports.up = async function(knex) {
	await knex.schema.alterTable("fruits", (table) => {
		table.text("color")
	})
};

exports.down = async function(knex) {
	// no need to drop table as we're only undoing the above operation
	// i.e. drop the newly created column only
 	await knex.schema.alterTable("fruits", (table) => {
 		table.dropColumn("color")
 	})
};

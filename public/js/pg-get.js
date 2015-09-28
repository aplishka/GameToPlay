var pg = require('pg');
var connectionString = process.env.DATABASE_URL;

function get_steam_app() {
	var client = new pg.Client(connectionString);
	client.connect();

	var getQuery = client.query('Select * from steam_apps limit 1');
	query.on('end', function(result) {
		alert(result);
		client.end();
	});
}

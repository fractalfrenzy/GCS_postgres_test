const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const config = {
	port: process.env.PORT || 8081,
	database: process.env.SQL_DATABASE || 'database',
	user: process.env.SQL_USER || 'postgres',
	password: process.env.SQL_PASS || 'password',
	options: {
		dialect: process.env.DIALECT || 'postgres',
		host: process.env.HOST || 'localhost',
		operatorsAliases: Op
	}
}

const sequelize = new Sequelize(
	config.database,
	config.user,
	config.password,
	config.options
);

const app = express();


const TestTable = sequelize.define('TestTable', {
	att: Sequelize.STRING,
} );

sequelize.sync()
	.then(() => {
		sequelize
		  .query('SELECT * FROM "testTable"')
		  .then(test => {
		    // Each record will now be mapped to the project's model.
		    console.log(test);
		  })
		
	});
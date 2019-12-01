const http = require('http');
const url  = require('url');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
const mongoDBurl = 'mongodb+srv://aaron:aaronso@aarondb-ep2mi.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'AaronDB';
var session = require('cookie-session');
var express = require('express');
const app = express();
const bodyParser = require('body-parser');

const server = http.createServer((req,res) => {
	let timestamp = new Date().toISOString();
	console.log(`Incoming request ${req.method}, ${req.url} received at ${timestamp}`);
	let parsedURL = url.parse(req.url,true); // true to get query as object 
	let max = (parsedURL.query.max) ? parsedURL.query.max : 20;   		 
	switch(parsedURL.pathname) {
		case '/':
			res.redirect('https://restaurant-381.herokuapp.com/login.html');
		break;
		default:
			res.writeHead(404, {"Content-Type": "text/html"});
			res.write('<html><body>');
			res.write("404 Not Found\n");
			res.end('<br><a href=/read?max=5>Give this a try instead?</a>');

	}
});



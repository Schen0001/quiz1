//Quiz far from complete I know...



const express = require('express');
const app = express();

// middleware installed
const logger = require('morgan');
app.use(logger('dev'));

// static assets enabled
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// To use views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

// Cookie stuff
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24;
app.get("/signed_in_user", (request, response) => {
  response.cookie("myCookie", "cookie value here", {
    maxAge: COOKIE_MAX_AGE
  });
  response.render("signed_in_user");
});

//sign in stuff
app.use((request, response, next) => {
	console.log('cookies:', request.cookies);
	const username = request.cookies.username;
	response.locals.loggedInUserName = username || '';
	next();
});

app.post('/sign_in', (req, res) => {
	const params = req.body;
	res.cookie('username', params.username, { maxAge: COOKIE_MAX_AGE });
	res.redirect('/signed_in_user');
});







app.get('/', (request, response) => {
  response.render('home');
});

app.get('/signed_in_user', (request, response) => {
    response.render('signed_in_user');
});

app.get('/sign_in', (request, response) => {
    response.render('sign_in');
});

const PORT = 3000;
const DOMAIN = 'localhost';

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`);
});
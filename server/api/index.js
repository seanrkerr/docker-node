import { Router } from 'express';
import facets from './facets';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';


export default function() {

	let csrfProtection = csurf({ cookie: true })
	let parseForm = bodyParser.urlencoded({ extended: false })

	var api = Router();

	// mount the facets resource
	api.use('/facets', facets);

	api.use(cookieParser());

	// perhaps expose some API metadata at the root
	api.get('/', csrfProtection, (req, res) => {
		res.json({
			csrfToken : req.csrfToken()
		});

		//res.render('send', { csrfToken: req.csrfToken() });
	});

	return api;
}

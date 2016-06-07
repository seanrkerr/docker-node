import { Router } from 'express';
import facets from './facets';
import { CRSF } from '../../node_modules/csurf';

export default function() {
	var api = Router();

	// mount the facets resource
	api.use('/facets', facets);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version : '1.0000'
		});
	});

	api.get('/test', (req, res) => {
		res.json({
		version : '1.2'
		});
	});

	return api;
}

/** @format */

import axios from 'axios';

const url = "https://ediaristas-workshop.herokuapp.com"
//"http://127.0.0.1:8000/";"https://ediaristas-workshop.herokuapp.com"; api teste

export const ApiService = axios.create({
	baseURL: url,
	headers: {
		'Content-Type': 'application/json',
	},
});

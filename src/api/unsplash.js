/**
 * Created by jai on 11/10/19.
 */
import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 09e67365a92fd50398f6493208a21fc1888e606700d563d6f46dbc6136b483d7'
	}
});
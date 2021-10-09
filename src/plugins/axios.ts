import axios from 'axios';

// Response interceptor
axios.interceptors.response.use(
	response => response,
	async error => {
		const { data, status } = error.response;
		const message = data?.message || data;

		if ([400, 401, 403].includes(status)) alert(message);

		return Promise.reject(error);
	}
);

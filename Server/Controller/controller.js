const sendSuccess = (res, data, status = 200, message = 'success') => {
	// console.log('data: ', data)
	return res.status(status).json({
		message: message,
		data: data,
		success: true
	});
};

const sendError = (res, message) => {
	return res.status(500).json({
		message: message || 'internal server error',
		success: false
	});
};

module.exports = { sendSuccess, sendError };
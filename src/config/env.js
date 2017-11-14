let baseUrl = 'http://localhost:8000'; 


if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){

	baseUrl = 'http://39.106.30.224:9000';
}

export {
	baseUrl
}
let baseUrl = 'http://10.1.7.230:9000'; 


if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){

	baseUrl = 'http://39.106.30.224:9000';
}

export {
	baseUrl
}
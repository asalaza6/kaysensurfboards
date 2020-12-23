const DEVELOPMENT = true;
const secure = false;
const imagesPort = 4000;
const serverPort = 3000;
//serve images with python server on port 4000 using the following command
//on the images folder in the server
//python -m http.server 4000
const configs = {
    api: {
	url: (secure?"https://":"http://")+(DEVELOPMENT ? 'localhost' : 'kaysensurfboards.net'),
        port: secure?8081:8080
    },
    images: {
	location:(secure?"https://":"http://")+(DEVELOPMENT?`localhost:${imagesPort}/`:"kaysensurfboards.net/images/")
    },
}
export default configs;

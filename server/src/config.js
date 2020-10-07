const DEVELOPMENT = true;

const configs = {
    reviews: {
        location:DEVELOPMENT?"images/reviews/":"/var/www/html/images/reviews"
    },
    loginInfo: {
        username: "test",
        password: "password"
    }
}

module.exports=configs;

const DEVELOPMENT = false;

const configs = {
    reviews: {
        location:DEVELOPMENT?"images/reviews/":"/var/www/kaysensurfboards.net/images/reviews/"
    },
    loginInfo: {
        username: "test",
        password: "password"
    }
}

module.exports=configs;

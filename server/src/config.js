const DEVELOPMENT = true;

const configs = {
    dev:DEVELOPMENT,
    reviews: {
        location:DEVELOPMENT?"images/reviews/":"/var/www/kaysensurfboards.net/images/reviews/"
    },
    loginInfo: {
        username: "test",
        password: "password"
    }
}

module.exports=configs;

const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteControllers {
    // [GET] /home
    home(req, res, next) {
        // res.render('home');
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();

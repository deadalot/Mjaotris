module.exports = function(express, app){
    var router = express.Router();

    // index.html
    router.get('/', function(req, res, next){
        res.render('index', {title: 'Mjaotris v0.01a'});
    })  

    

    app.use('/', router);
}
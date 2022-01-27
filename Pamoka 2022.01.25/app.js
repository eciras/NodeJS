const fs                = require('fs');
const path              = require('path');
const express           = require('express');
const expressHandlebars = require('express-handlebars');
const multer            = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage });
const app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));

app.set('views',__dirname + '/main-page');

app.engine('hbs', expressHandlebars.engine({
    extname: 'hbs',
    layoutsDir: __dirname + '/main-page',
    defaultLayout: 'index'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', upload.single('failas'), (req, res) => {
    // let category = false;
    // if(req.body.category == 'private')
    //     category = true
    //     if(req.body.category == 'public')
    //     category = true
    //     if(req.body.category == 'collobaration')
    //     category = true
        res.render('index');
  });

  app.post('/simple-forma-submit', (req, res) => {
      console.log(req.body)
  })

  app.get('/simple-forma', (req, res) => {
      res.render('simple-forma')
  })

app.listen(3000);
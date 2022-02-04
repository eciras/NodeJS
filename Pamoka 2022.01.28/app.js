const fs                = require('fs');
const path              = require('path');
const express           = require('express');
const expressHandlebars = require('express-handlebars');
const multer            = require('multer');
const { title } = require('process');

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

const target = path.join(__dirname, 'database', 'formphoto.json');

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
    layoutsDir: __dirname + '/main-page/layout',
    defaultLayout: 'index'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    fs.readFile(target, 'UTF-8', (err, data) => {
        let obj = JSON.parse(data)
        console.log(obj);
        res.render('pradinis', {data: obj})
    })

    // res.render('pradinis')
})

app.get('/simple-forma', (req, res) => {
    res.render('simple-forma')
    
})

  app.post('/simple-forma', upload.single('failas'), (req, res) => {
      let photo = '/uploads/' + req.file.filename;
      req.body.photo = photo;
      
    let data = req.body;
    let message = {};

   if(data.projectname === undefined) {
       message.projectname = "Projekto pavadinimas neįvestas"
   }

    data = JSON.stringify(req.body);
      console.log(data)

        
        fs.writeFile(target, data, (err) => {
            if(err) throw err;
            console.log('JSON file saved')
        })
    

      res.redirect('/simple-forma')
  })




app.listen(3000);
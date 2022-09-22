const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const connectToMongoDb = require('./db');
const Employee = require('./models/Employee');
const addDataToDb = require('./AddData');

//serve as a static file
const staticPath = path.join(__dirname + '/public');
app.use(express.static(staticPath));

// set view engine
app.set('view engine', 'hbs');

//mongoDb connection
connectToMongoDb();
//adding some data to mongodb
addDataToDb();

//routes
app.get('/', async (req, res) => {
  try {
    let { page, limit } = req.query;
    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = 5;
    }
    let pageNumber = parseInt(page);
    let limitNumber = parseInt(limit);
    const startIndex = (pageNumber - 1) * limitNumber;
    // const endIndex = pageNumber * limitNumber;
    const resultEmployees = await Employee.find()
      .limit(limitNumber)
      .skip(startIndex)
      .exec();
    // console.log(resultEmployees);
    res.render('index', {
      title: 'Pagination App',
      employees: resultEmployees,
    });
  } catch (err) {
    console.log(err);
  }
});

// server listening on a port
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});

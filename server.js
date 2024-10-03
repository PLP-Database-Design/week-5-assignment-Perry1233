// Initialiazation of Dependencies

const express = require('express');
const app = express();
const mysql = require ('mysql2');
const dotenv = require ('dotenv');
const cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

// Connection of the database

const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    // Checking if database connection works
    db.connect((err) => {
        // No connectivity
        if(err) return console.log("Error connecting to the mysql database");

        // Connected
        console.log("Connected to mysql successfully as id: ", db.threadId)

                           //GET Method

        // QUESTION 1: Retrieve all patients

        app.set('view engine', 'ejs');
        app.set('views', __dirname + '/views');

        //Data is the name of the file inside views
        app.get('/data', (req,res) => {
            //Retrieve data from database
            db.query('SELECT * FROM patients', (err, results) => {
                if (err){
                    console.error(err);
                    res.status(500).send('Error retrieving data');
                }else{
                    // Render the data in a template
                    res.render('data', {results: results});
                }
            });
        });


        // QUESTION 2: Retrieve all providers

        app.set('view engine', 'ejs');
        app.set('views', __dirname + '/views');

        //Data is the name of the file inside views
        app.get('/data', (req,res) => {
            //Retrieve data from database
            db.query('SELECT * FROM providers', (err, results) => {
                if (err){
                    console.error(err);
                    res.status(500).send('Error retrieving data');
                }else{
                    // Render the data in a template
                    res.render('data', {results: results});
                }
            });
        });


        
        // QUESTION 3: Filter patients by First Name

        app.set('view engine', 'ejs');
        app.set('views', __dirname + '/views');

        //Data is the name of the file inside views
        app.get('/data', (req,res) => {
            //Retrieve data from database
            db.query('SELECT * FROM patients', (err, results) => {
                if (err){
                    console.error(err);
                    res.status(500).send('Error retrieving data');
                }else{
                    // Render the data in a template
                    res.render('data', {results: results});
                }
            });
        });


        // QUESTION 4: Retrieve all providers by their specialty

        app.set('view engine', 'ejs');
        app.set('views', __dirname + '/views');

        //Data is the name of the file inside views
        app.get('/data', (req,res) => {
            //Retrieve data from database
            db.query('SELECT * FROM providers', (err, results) => {
                if (err){
                    console.error(err);
                    res.status(500).send('Error retrieving data');
                }else{
                    // Render the data in a template
                    res.render('data', {results: results});
                }
            });
        });

         
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);

            // Send a message to the browser
            console.log('Sending message to browser...');
            app.get('/', (req,res) => {
                res.send('Server started successfully! Weddind can go ON!!')
            })
        });
    });



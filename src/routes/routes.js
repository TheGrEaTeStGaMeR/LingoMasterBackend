const express = require("express");
const router = express.Router();
const { postContact } = require('../controllers/contactData'); 
const { postLogin } = require('../controllers/loginData');
const { postSignup } = require('../controllers/signupData');

const app = express();
app.use(express.json())

router.get('/', async (req, res) => {
    try {
        res.send("This is Backend");
    }
    catch (err) {
        console.error("Error getting the page : ", err);
    }
});

router.post('/contact', postContact);

router.post('/login', postLogin);

router.post('/signup', postSignup);

module.exports = router;

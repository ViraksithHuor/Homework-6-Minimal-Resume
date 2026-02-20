const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// Handlebar engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/resume', (req, res) => {
    res.render('resume', {
        name: 'John Cat',
        title: 'Housecat',
        experience: [
            {
                company: 'Home',
                role: 'Chief Nap Officer',
                duration: '2015 - Present',
                description: 'Responsible for overseeing all napping activities and ensuring maximum comfort.'
            },
            {
                company: 'Home',
                role: 'Mouse Hunter',
                duration: '2010 - 2015',
                description: 'Successfully hunted and caught over 100 mice, contributing to a pest-free environment.'
            }
        ],
        skills: ['Napping', 'Purring', 'Climbing', 'Hunting']
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
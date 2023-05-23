const express = require('express');
const app = express();
app.use(express.json());
//EJS
app.set('views', './views')
app.set('view engine', 'ejs')
const heureDeTravail = (req, res, next) =>{
    const date = new Date();
    const jourDeS = date.getDay();
    const heure = date.getHours();
    if(jourDeS >=1 && jourDeS <=5 && heure >= 9 && heure <= 17){
        next();
    }else{
        res.render('du lundi-vendredi ');
    }
};

//link css
//app.use(express.static('style'));

//appliquer pour tous les pages 

app.use(express.static('public'));
//Routage
app.get('/', heureDeTravail,(req, res)=>{
    res.render('home');
});
//Route Service
app.get('/service', heureDeTravail, (req, res) =>{
    res.render('service');
});
//rRoute contact
app.get('/contact', heureDeTravail, (req, res) =>{
    res.render('contact');
});
//port du serveur 
app.listen(3000, ()=>{
    console.log('serveur lancer');
});
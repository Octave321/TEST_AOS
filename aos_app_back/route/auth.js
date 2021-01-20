const express = require('express'),
    sha512 = require('js-sha512'),
    jwt = require('jsonwebtoken'),
    expressJwt = require('express-jwt');
    const bodyParser = require('body-parser');

const { User } = require('../database')

module.exports=(app)=>{
 
    app.use(bodyParser.json());

   app.post('/register', (req, res) => { 
       console.log('ok');
       
    let email = req.body.email
    let password = req.body.password

    console.log(email,password);
 
        if(email && password ){
            console.log(email);
            console.log(password);
                if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
                    console.log("condition2");
                    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)){
                        console.log("condition3");
                        User.create({
                            email: email,
                            password: sha512.sha512(password),
                        }).then((user) => {
                            res.status(201).json({
                                status: 201,
                                data: user                              
                            })
                        })
                    }
                }
            
        }
        // res.status(500).json({
        //     status:500
        // });

   })

   app.get('/login', (req, res) => {
        let email = req.query.email
        let password = req.query.password
        
        
        if (req.query.email && req.query.password) {
            console.log(email)
            User.findOne({
                where: {
                    email: email,
                    password: sha512.sha512(password)
                }             
            }).then((user) => {
                res.status(200).json({
                    status: 200,
                    data: user
                })
    
            })


        }
    })
    

}
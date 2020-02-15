/*const express = require('express');
//enrrutador define rutas del servidor
const router = express.Router();

 router.get('/', (req,res) =>{
     res.json([]);
 }); 

module.exports = router;
*/
// recivo el objeto (app) que ya esta definido 

const User = require('../model/user');


module.exports = function (app) {

    app.get('/users', (req,res) =>{
        User.getUsers((err,data)=>{
            res.json(data);
        });
    }); 

 
    app.post('/users', (req,res)=>{
    
           const userData = {
            
            id : null,
            username : req.body.username,
            email : req.body.email,
            password: req.body.password,
            created_at : null,
            update_at : null
            }; 
            User.insertUser(userData, (err,data)=>{
                if (data && data.insertId) {
                    res.json({
                        success: true,
                        msg: 'usuario insertado',
                        data: data
                    })
                    
                }else{
                    res.status(500).json({
                        success:false,
                        msg: 'Error'
                    });
                }
            });
        
       
    });

    app.put('/users/:id', (req,res)=>{

        const userData = {
            
            id : req.params.id,
            username : req.body.username,
            email : req.body.email,
            password: req.body.password,
            created_at : null,
            update_at : null
            }; 

            User.updateUser(userData,(err,data)=>{
                if (data && data.msg) {
                    res.json(data)
                }else{
                    res.json({
                        success:false,
                        msg:"error"
                    });
                }
            });
          });


    app.delete('/users/:id', (req,res)=>{

        User.deleteUser(req.params.id, (err,data)=>{

            if (data && data.msg === 'delete' || data.msg === 'not exist') {
                
                res.json({
                    success:true,
                    data
                })
            }else{
                res.status(500).json({
                    msg:'error'
                })
            }
        }) 
    });
}





        

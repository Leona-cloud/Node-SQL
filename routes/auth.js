const express = require("express");
const connection = require('../connection');

const router = express.Router();


router.post('/register', async(req, res)=>{

   let {email, name, password} = req.body
   query = "insert into user (name, email, password) values(?, ?, ?)";
   connection.query(query, [name, email, password], (err, results)=>{
    if(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: `Something went wrong, ${err.message}`
        })
    }
    return res.status(200).json({
        success: true,
        message: "user saved successfully"
    })
   })

});


router.get('/user', async(req, res)=>{

    let query = 'select * from user';
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            })
        }
        return res.status(200).json({
            success: true,
            message: "users fetched successfully",
            data: result
        })
    })

});


router.patch('/update/:id', async(req, res)=>{
    const id = req.params.id;
    const {name} = req.body;
    let query = 'update user set name=? where id=?';
    connection.query(query, [name, id], (err, result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            })
        }else{
            if(result.affectedRows === 0){
                return res.status(400).json({
                    success: false,
                    message: "User does not exist"
                })
            };
            return res.status(200).json({
                success: true,
                message: "User updated succesfully"
            })
        }
    })

});


router.delete('/delete/:id', async(req, res)=>{
    const id = req.params.id;
    let query = 'delete from user where id=?';
    connection.query(query, [id], (err, result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            })
        }else{
            if(result.affectedRows === 0){
                return res.status(400).json({
                    success: false,
                    message: "User does not exist"
                })
            };
            return res.status(200).json({
                success: true,
                message: "User deleted succesfully"
            })
        }
    })
})





module.exports = router
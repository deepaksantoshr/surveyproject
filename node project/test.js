
var mongoose = require('mongoose');

var survay = require('./survay.Model');
var bodyParser = require('body-parser')
express = require('express');


app=express();
var http =require('http').Server(app);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mydbs');

app.route('/').get((req,res)=>{

    survay.find({},function (err, usr) {
        if(err) { res.status(404).send("error"+err); }
        else{if(usr)
            
            res.json(usr);
            
            }
    });
});

app.get('/findbyid/:id', function (req, res, next) {
    var id = req.params.id;
    
    survay.find({"name":id},function (err, usr) {
        if(err) { res.status(404).send("error"+err); }
        else{if(usr)
            
            res.json(usr);
            
            }
    });
});




app.route('/add').post((req,res)=>{
    console.log("inside post "+req.body);
survay.create(req.body,(err,feedback)=>{
if(err){res.status(404).send(err);}
else{
    console.log(feedback);
    res.send(feedback);

}

 });

// req.on('data',(d)=>{
//     console.log("post data is:"+ d);
//      survay.create( d.json,(err,feedback)=>{

//     //     console.log(feedback);

// });

// })

});

http.listen(6336,()=>{
    console.log("port started on 6336")
});
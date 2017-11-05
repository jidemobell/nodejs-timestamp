var express = require('express');
//var bodyParser = require('body-parser');
var app = express();
//app.use(bodyParser.json());

//app.use(cors);

app.get('/home/:statement',function (req,res){
    var entry = req.params.statement;
     
    var natural = new Date(entry);
    //console.log( Number.isNaN(entry));
    var match = entry.match(/D+/g);
    //console.log(match);
    if(match != null){
        var unixDate = natural.getTime()/1000;
        
        var naturalDate = entry;
    
        
    }else{
        var options = {  year: 'numeric', month: 'long', day: 'numeric' };
        var unixDate = entry * 1000;
        
        var naturalDate = new Date(unixDate).toLocaleDateString('en-US',options);
        
    }
   
    if(naturalDate == 'Invalid Date'){
        var output = {unix: null, natural: null}
    }else{
        var output = {unix: unixDate, natural: naturalDate}
        
    }
    
      res.json(output); 
});



app.listen(3300, function(error){
    if(error)throw error
})
var express = require('express');
var router=express.Router();
/* Get Home Page*/
router.get('/',(req,res,next)=>{
    console.log(req.query)
    if(Object.keys(req.query).length===0){
        console.log("Entered")
        let r=Math.random()
        res.render(`computation`,{value1:`Math.abs() applied to ${r} is ${Math.abs(r)}`,
        value2:`Math.acos() applied to ${r} is ${Math.acos(r)}`,
        value3:`Math.sin() applied to ${r} is ${Math.sin(r)}`});
 
    }else
    for(let x in req.query) {
        console.log(i)
        res.render(`computation`,{value1:`Math.abs() applied to ${req.query[x]} is ${Math.abs(req.query[x])}`,
        value2:`Math.acos() applied to ${req.query[x]} is ${Math.acos(req.query[x])}`,
        value3:`Math.sin() applied to ${req.query[x]} is ${Math.sin(req.query[x])}`});
 
    }
 
});
module.exports=router;
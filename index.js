const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const agent = require('./models/agent');

mongoose.connect('mongodb://CNAtion96:Cwim19967@ds141168.mlab.com:41168/scp_motw');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Get all of agents
app.get('/agent',function(req,res){
  project.find().exec((err,response)=>{
    if(err) return res.json({err});
    res.json(response);
	})
})

// Get a single agent
app.get('/agent/:id',function(req,res){
	let id = req.params.id
	project.findById(_id=id).exec((err,response)=>{
		if(err) console.log(err)
		res.send(response)
	})
})

// Post a new agent
app.post('/agent',function(req,res){
  let Project = new project({
    "name": req.body.name,
    "classification": req.body.classification,
    "clearance": req.body.clearance,
    "supervisor": req.body.supervisor,
    "taskForce": req.body.taskForce,
    "species": req.body.species
  });
  Project.save(err=>{
    if(err) return res.json({err});
    project.find().exec((err,response)=>{
      if(err) res.json({err});
      res.json(response);
    });
  });
})

// Delete an agent
app.delete('/agent/:id',function(req,res){
  let id = req.params.id;
  project.remove({_id:id}).exec((err)=>{
    if(err) return res.json({err});
    project.find().exec((err,response)=>{
      if(err) return res.json(err);
      res.json(response);
    })
  });
  
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
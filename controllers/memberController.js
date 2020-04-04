var member  = require('../models/member');


var memberController = {
    getMember(req,res){
    member.findAll()
    .then(function(dataa){
        res.json(dataa)
    })
  .catch(error=>console.log(`error occurred`,error));
    },
    addMember(req,res){
        console.log(req.body)
          member.create({name:req.body.name,country:req.body.country,
          language:req.body.language,salary:req.body.salary})
        .then(function(dataa){
          res.json({"message":'success'})
        })
        .catch(function(error){
        console.log(`error occured`,err)
        });
      },
      editMember(req,res){
        console.log('id',req.params.id)
        member.findOne({where:{mid:req.params.id},raw: true})
        .then(function(dataa){
          if(!dataa){
            res.json({"message":'not edited'})
          }
          else{
            var x = JSON.stringify(dataa)
            console.log(JSON.parse(x))
            var temp=[];
            temp.push(JSON.parse(x))
            console.log('sd',temp)
            res.json({'data':temp})
          }
      }).catch(function(error){
        console.log('error occured',error)
      })
    },
    updateMember(req,res){
      member.update({name:req.body.name,country:req.body.country,
        language:req.body.language,salary:req.body.salary},{where:{mid:req.params.id}})
      .then(function(dataa){
        res.json({"message":'success'})
      })
      .catch(function(error){
      console.log(`error occured`,err)
      });  
    },
    deleteMember(req,res){
      console.log('delid',req.params.id)
        member.destroy({where:{mid:req.params.id}})
        .then(function(dataa){
          res.json({'message':'deleted'})
        })
        .catch(function(error){
         console.log('error occured',error)
      });
    },
}

module.exports = memberController;
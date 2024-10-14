const express=require("express");
const cors=require("cors");
const db = require("./config");
const app = express();
app.use(express.json());
app.use(cors());
const Products = db.collection("Products");
const User = db.collection("Users");

// PRODUCTOS
app.get("/Products/", async(req,res)=>{
    const snapshot= await Products.get();
    const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
    res.send(list)
  });
  
  app.put("/Products/create", async(req,res)=>{
      const data = req.body
       await Products.add(data)
       res.send({msg:"Producto Adicionado"})
  });
  
  app.post("/Products/update", async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await Products.doc(id).update(data);
    res.send({ msg: "Producto Actualizado" });
  });
  
  app.delete("/Products/delete", async (req, res) => {
    const id = req.body.id;
    await Products.doc(id).delete();
    res.send({ msg: "Producto Borrado" });
  });

  //USUARIOS API

  app.get("/Users/", async(req,res)=>{
    const snapshot= await User.get();
    const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
    res.send(list)
  });
  
  app.put("/Users/create", async(req,res)=>{
      const data = req.body
      console.log("Data of Users ", data)
       await User.add(data)
       res.send({msg:"Usuario Adicionado"})
  });
  
  app.post("/Users/update", async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await User.doc(id).update(data);
    res.send({ msg: "Usuario Actualizado" });
  });
  
  app.delete("/Users/delete", async (req, res) => {
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({ msg: "Usuario Borrado" });
  });

  //AUTENTICACION
  
app.post("/Authentication/", async(req,res)=>{
    const snapshot= await User.get();
    const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
    list.forEach(element => {
        if((element.User == req.body.User && element.Pass == req.body.Pass))
        {
            res.send("Valid")
            return false;
        }
        else
        {
            res.send("Not Valid")
            return true;
        }
    });
  });

  app.listen(4000,()=>console.log("Up & Running * 4000"))
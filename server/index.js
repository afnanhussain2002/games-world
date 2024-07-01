const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cookieParser =require('cookie-parser')
const app = express()
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
}))
app.use(cookieParser())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wpyq7sp.mongodb.net/?appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// my middle wares

const verifyToken = async(req,res,next) =>{
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({message:'unauthorized'})
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) =>{
    req.user = decoded
  })
  next()
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

  
    
    // connect to database 
    const database = client.db("gameWorldDB");
    const allGamesCollection = database.collection("game")
    const cartCollection = database.collection("cart")

      // use jwt
  app.post('/jwt', async(req,res) =>{
    const user = req.body;
    console.log(user);
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1h'})
  
    res
    .cookie('token', token, {
      httpOnly:true,
      secure:false
    })
    .send({success:true})
  })
    // create data
    app.post('/allGames', async(req,res) =>{
      const game = req.body;
      const result = await allGamesCollection.insertOne(game)
      res.send(result)
    })


    // read a single data
    app.get('/allGames/:id', async(req,res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await allGamesCollection.findOne(query)
      res.send(result)
   })
    // read the data
    app.get('/allGames', async(req,res) =>{
      const allGames = await allGamesCollection.find().toArray()
      res.send(allGames)
    })

    // Add user product on cart

    app.post('/cart', async(req,res) =>{
      const game = req.body
      const result = await cartCollection.insertOne(game)
      res.send(result)

    })

    // read cart data using user email

    app.get('/cart', verifyToken, async(req,res) =>{
      let query = {}
      if (req.query.email !== req.user.email) {
        return res.status(403).send({message:'forbidden access'})
      }
      if (req.query?.email) {
        query = {userEmail: req.query.email}
      }
      const result = await cartCollection.find(query).toArray();
      res.send(result)
    })
// remove token after user logout

app.post('/logout', (req,res) =>{
  res.clearCookie('token',{maxAge:0}).send({success:true})
})
    
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// server main port and main route
app.get('/', (req, res) =>{
    res.send('Game World Server')
})

app.listen(port, () =>{
    console.log(`Server is Running on Port${port}`);
})
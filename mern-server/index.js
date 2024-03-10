const express = require("express");
const app = express();

const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();
const port = process.env.PORT;

//this middleware will make connection  to the front end side
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the book store");
});

//Mongodb connection

const uri =process.env.MONGODB;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //here we are creating the documents
    const bookCollections = client.db("BookInventory").collection("books");
    const FeedBackCollections = client.db("BookInventory").collection("feedback");

    //insert feedback to the collection
    app.post("/feedback", async (req, res) => {
      const data = req.body;
      const result = await FeedBackCollections.insertOne(data);
      // console.log(result)
      res.send(result);
    });

    //getting all the feedback
    app.get("/feedback", async (req, res) => {
      const feedback = FeedBackCollections.find();
      const result = await feedback.toArray();
      res.send(result);
    });

    //insert a book to the db: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      // console.log(result)
      res.send(result);
    });

    //get all books from the database
    // app.get('/all-books',async(req,res)=>{
    //   const books =  bookCollections.find();
    //   const result = await books.toArray();
    //   res.send(result)

    // })

    //update a book data
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updatedBookDate = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updatedBookDate,
        },
      };
      const options = { upsert: true };
      //now update
      const result = await bookCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //for delete method
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      //now update
      const result = await bookCollections.deleteOne(filter, options);
      res.send(result);
    });

    //now filtering by category using req.query
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    //to get single book based on id
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

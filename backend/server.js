const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const axios = require('axios');
const { query } = require('express');

const app = express();
const port = process.env.PORT || 3000;

const url = 'mongodb+srv://nairrradhakrishnan183:sagar180402@cluster0.b1vjvq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);

app.use(express.json());

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
connectToMongoDB();

// // Define route to handle POST requests
app.post('/query', async (req, res) => {
  console.log('Received POST request to /query');
  console.log('Request body:', req.body);

  const { geminiResponse } = req.body;

  // Split the string into collection name and projection object
  const parts = geminiResponse.split('.');
  const collectionName = parts[1];

  function parseQuery(query) {
    let b1 = {}, b2 = {}, b3 = {};

    // Extracting find()
    const findStart = query.indexOf('.find(');
    if (findStart !== -1) {
      const findEnd = query.indexOf(')', findStart);
      const findStr = query.substring(findStart + 6, findEnd);
      const findJsonStr = `{ "find": ${JSON.stringify(eval('(' + findStr + ')'))} }`;
      const findObj = JSON.parse(findJsonStr);
      b1 = findObj.find;
    }

    // Extracting project()
    const projectStart = query.indexOf('.project(');
    if (projectStart !== -1) {
      const projectEnd = query.indexOf(')', projectStart);
      const projectStr = query.substring(projectStart + 9, projectEnd).trim();
      const projectJsonStr = `{ "project": ${JSON.stringify(eval('(' + projectStr + ')'))} }`;
      const projectObj = JSON.parse(projectJsonStr);
      b2 = projectObj.project;
    }

    // Extracting sort()
    const sortStart = query.indexOf('.sort(');
    if (sortStart !== -1) {
      const sortEnd = query.indexOf(')', sortStart);
      const sortStr = query.substring(sortStart + 6, sortEnd).trim();
      const sortJsonStr = `{ "sort": ${JSON.stringify(eval('(' + sortStr + ')'))} }`;
      const sortObj = JSON.parse(sortJsonStr);
      b3 = sortObj.sort;
    }

    console.log('Find :', b1);
    console.log('Projection :', b2);
    console.log('Sort:', b3);

    return { b1, b2, b3 };
  }

  const { b1: find, b2: projection, b3: sort } = parseQuery(geminiResponse);

  try {
    const result = await client
      .db('Employee')
      .collection(collectionName)
      .find(find)
      .project(projection)
      .sort(sort)
      .toArray();

    // console.log(projection)    

    // Send back the MongoDB query result to the frontend
    console.log(result)
    res.json(result);
  } catch (err) {
    console.error('Error executing MongoDB query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server 
app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});

import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

// Convert MongoDB response data into an HTML table
function convertToTable(data) {
  if (!Array.isArray(data) || data.length === 0) {
      return ''; // Return empty string if data is not an array or empty
  }

  // Get column headers from the first object in the data array
  const headers = Object.keys(data[0]);

  // Generate table header row
  let table = '<table border="1"><thead><tr>';
  headers.forEach(header => {
      table += `<th>${header}</th>`;
  });
  table += '</tr></thead><tbody>';

  // Generate table rows
  data.forEach(row => {
      table += '<tr>';
      headers.forEach(header => {
          table += `<td>${row[header]}</td>`;
      });
      table += '</tr>';
  });

  table += '</tbody></table>';

  return table;
}


export const Feed = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState(''); // Initialize prompt state
  

  useEffect(() => {
    // Set the hardcoded prompt
    setPrompt(" Convert natural language query intp MongoDB query. Give precedence to subsequent queries over the previous ones. Use 'Follow up' to combine queries. When we use 'Follow up' we give the mongodb query as a combination of the previous queries. Example: User - Give me names of all employees. System - db.EmpDetails.find({}).project({NAME: 1, _id: 0}).   User - follow up: age above 30. System - db.EmpDetails.find({AGE:{$gt:30}}.project({NAME: 1, _id: 0})  Terminate with 'Terminate'. Do not reply with any other statements other than mongodb query. Given database name - Employee. Given collection name - EmpDetails.  Given fields - NAME,AGE,CITY   Convert the given natural language statements to their mongodb query equivalent. Always give mongodb query of the format db.EmpDetails.find({}).project({}).sort({}) even if the parameters are empty. No extra stuff.");
  }, []); // Run this effect only once, when the component mounts

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEnter = async () => {
    if (message.trim() !== '') {
      try {
        // Send the user's query and prompt to Gemini AI
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
          {
            contents: [
              {
                parts: [
                  { text: prompt }, // Send the prompt
                  { text: message }, // Send the user's query
                ],
              },
            ],
          }
        );
  
        let geminiText = "NOT RECEIVED";
        if (
          response.data &&
          response.data.candidates &&
          response.data.candidates[0] &&
          response.data.candidates[0].content &&
          response.data.candidates[0].content.parts &&
          response.data.candidates[0].content.parts[0].text
        ) {
          geminiText =
            response.data.candidates[0].content.parts[0].text;
        }
  
        // Display Gemini AI response
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message, received: false }, // Display user's query
          { text: geminiText, received: true }, // Display Gemini AI response
        ]);
  
        setMessage('');
  
        try {
          const mongoResponse = await axios.post('/query', {
            geminiResponse: geminiText, 
          });
          
  
          // Display MongoDB query result
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: convertToTable(mongoResponse.data), received: true }, // Display MongoDB query result
          ]);
        } catch (mongoError) {
          console.error('Error processing MongoDB query:', mongoError);
  
          // Display error message for MongoDB failure
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "There was a problem processing your MongoDB query. Please try again later.", received: true },
          ]);
        }
      } catch (error) {
        console.error('Error sending query to Gemini AI:', error);
  
        // Display "NOT RECEIVED" message
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message, received: false }, // Display user's query
          {
            text:
              "There was a problem processing your query. Please try again later.",
            received: true,
          },
        ]);
  
        setMessage('');
      }
    }
  };
  
  

  return (
    <Box padding={2} flex={5} bgcolor="darkblue" width="100vw" height="78vh" display="flex" flexDirection="column">
      {messages.map((msg, index) => (
        <Box key={index} display="flex" justifyContent={msg.received ? 'flex-start' : 'flex-end'} marginBottom="10px">
          <Box bgcolor={msg.received ? "lightblue" : "lightblue"} color="black" borderRadius="10px" padding="10px" maxWidth="70%">
          <Typography dangerouslySetInnerHTML={{ __html: msg.text }}></Typography>
          </Box>
        </Box>
      ))}

      <Box position='absolute' bottom="10px" width="calc(100% - 350px)" display="flex" justifyContent="center">
        <TextField
          multiline
          rows={3}
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
          sx={{
            width: 'calc(100% - 100px)', // Adjust width as needed
            marginRight: '5px', // Adjust margin as needed
            textAlign: 'center',
            bgcolor: 'white', // Set background color to white
            color: 'black', // Set text color to black
            borderRadius: '10px'
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleEnter}
          sx={{
            width: '90px', // Adjust width as needed
            marginLeft: '5px', // Adjust margin as needed
            borderRadius: '10px',
          }}
        >
          Enter
        </Button>
      </Box>
    </Box>
  );
};

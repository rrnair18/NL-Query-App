import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/material';

const AcFeed = () => {
    return (
        <Box
            sx={{ bgcolor: 'blue', color: 'white' }}
            style={{ display: 'flex', flexDirection: 'column', minHeight: '60.8vh', }}>
            <Accordion sx={{ bgcolor: 'skyblue', '& .MuiAccordionSummary-root': { borderBottom: '1px solid black' } }}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ borderBottom: '1px solid #00' }} // Add border style here
                >
                    <Typography fontWeight="bold" style={{ marginLeft: '20px' }}> ➢ What is Natural Language Query App</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontWeight="bold">
                        Natural Language Query (NLQ) App is a software application that allows users to interact with databases, systems, or applications using natural language instead of traditional query languages or interfaces. The NLQ app uses NLP algorithms to analyze and understand the user's query.Based on the analysis of the user's query, the NLQ app generates the corresponding database query or API request. This involves translating the natural language query into a format that can be understood by the underlying data source. 
                    </Typography>    
                    <Typography fontWeight="bold">
                        The NLQ app sends the generated query to the database or data source and retrieves the relevant data or information based on the user's request. Finally, the NLQ app presents the retrieved data to the user in a human-readable format, such as a table, chart, or natural language response. The user can then interact with the presented information, refine their query, or ask follow-up questions
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: 'skyblue', '& .MuiAccordionSummary-root': { borderBottom: '1px solid black' } }}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography fontWeight="bold" style={{ marginLeft: '20px' }}> ➢ Significance of Natural Language Query App </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontWeight="bold">
                        NLQ apps provide a user-friendly interface that allows users to interact with systems using natural language, which is more intuitive for many people compared to using complex query languages or interfaces. NLQ apps can improve efficiency by allowing users to quickly retrieve the information they need without needing to learn specialized query languages or navigate complex interfaces. NLQ apps can facilitate deeper insights and analysis by enabling users to ask complex questions and receive meaningful answers, even if they lack expertise in data analysis or query languages.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: 'skyblue', '& .MuiAccordionSummary-root': { borderBottom: '1px solid black' } }}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography fontWeight="bold" style={{ marginLeft: '20px' }}> ➢ Our team members </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontWeight="bold">
                        ➢ R. Radhakrishnan Nair
                    </Typography>
                    <Typography fontWeight="bold">
                        ➢ Vedant
                    </Typography>
                    <Typography fontWeight="bold">
                        ➢ Kashish
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default AcFeed
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function EnvironmentalSuggestion() {
    const [isAccordionExpanded1, setIsAccordionExpanded1] = useState(false);
    const [isAccordionExpanded2, setIsAccordionExpanded2] = useState(false);
    const [isAccordionExpanded3, setIsAccordionExpanded3] = useState(false);
    const [isAccordionExpanded4, setIsAccordionExpanded4] = useState(false);
    const [isAccordionExpanded5, setIsAccordionExpanded5] = useState(false);



    const handleAccordionChange1 = (event, isExpanded) => {
        setIsAccordionExpanded1(isExpanded);
    };

    const handleAccordionChange2 = (event, isExpanded) => {
        setIsAccordionExpanded2(isExpanded);
    };

    const handleAccordionChange3 = (event, isExpanded) => {
        setIsAccordionExpanded3(isExpanded);
    };
    const handleAccordionChange4 = (event, isExpanded) => {
        setIsAccordionExpanded4(isExpanded);
    };
    const handleAccordionChange5 = (event, isExpanded) => {
        setIsAccordionExpanded5(isExpanded);
    };

    return (
        <div>
           <Accordion onChange={handleAccordionChange1}  className='my-3  roundd p-2 rounded-full'>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded1 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded1 ? '#129635' : 'initial',
                        color: isAccordionExpanded1 ? 'White' : 'initial',

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >   Question 1</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleAccordionChange2} className='my-3  roundd p-2 rounded-full'>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded2 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded2 ? '#129635' : 'initial',
                        color: isAccordionExpanded2 ? 'White' : 'initial',
                        

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >Question 2</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleAccordionChange3} className='my-3  roundd p-2 rounded-full'>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded3 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded3 ? '#129635' : 'initial',
                        color: isAccordionExpanded3 ? 'White' : 'initial',

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >Question 3</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleAccordionChange4} className='my-3  roundd p-2 rounded-full'>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded4 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded4 ? '#129635' : 'initial',
                        color: isAccordionExpanded4 ? 'White' : 'initial',

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >Question 4</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleAccordionChange5} className='my-3  roundd p-2 rounded-full'>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded5 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded5 ? '#129635' : 'initial',
                        color: isAccordionExpanded5 ? 'White' : 'initial',

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >Question 5</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

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

    const handleAccordionChange1 = (event, isExpanded) => {
        setIsAccordionExpanded1(isExpanded);
    };

    const handleAccordionChange2 = (event, isExpanded) => {
        setIsAccordionExpanded2(isExpanded);
    };

    const handleAccordionChange3 = (event, isExpanded) => {
        setIsAccordionExpanded3(isExpanded);
    };

    return (
        <div className='bg-black px-60 py-20'>
           <Accordion onChange={handleAccordionChange1}>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded1 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded1 ? '#06473d' : 'initial',
                        color: isAccordionExpanded1 ? 'White' : 'initial',

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >Accordion 3</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleAccordionChange2}>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded2 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded2 ? '#06473d' : 'initial',
                        color: isAccordionExpanded2 ? 'White' : 'initial',

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >Accordion 3</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion onChange={handleAccordionChange3}>
                <AccordionSummary
                    expandIcon={<KeyboardDoubleArrowDownIcon style={{  color: isAccordionExpanded3 ? 'White' : 'initial', fontWeight: 'bold' ,fontSize: '1.8rem'}} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{
                        backgroundColor: isAccordionExpanded3 ? '#06473d' : 'initial',
                        color: isAccordionExpanded3 ? 'White' : 'initial',

                    }}                     >
                    <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }} >Accordion 3</Typography>
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

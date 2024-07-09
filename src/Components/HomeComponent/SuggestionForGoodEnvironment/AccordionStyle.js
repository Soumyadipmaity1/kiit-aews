import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const questions = [
  {
    id: 1,
    title: "Who are we?",
    details:
      "We are AEWS, We work for the welfare of the animals as well as the environment. A socially active society which is only devoted to Animal help, care, and support. Not only animals, we do look after the plants and nurture them.",
  },
  {
    id: 2,
    title: "How can I join KIIT AEWS?",
    details:
      "You can join us at AEWS by staying in touch with us as we recruit you by taking your interviews. An interview process is required to know you and your skills that will be helpful for our society.",
  },
  {
    id: 3,
    title: "How are we different?",
    details:
      "We are not just a society, we are a Family. We work as a team. We teach and learn from each other by exchanging different ideas and experiences.",
  },
  {
    id: 4,
    title: "What are the different domains?",
    details: [
      "General Volunteer",
      "Public Relation",
      "Research and Development",
      "Social Media",
    ],
  },
  {
    id: 5,
    title: "How can we provide help on University level?",
    details:
      "At University Level, we look for animals seeking help and provide immediate assistance to them. We organize regular food drives, cleanliness drives, and Plantation drives. We also conduct workshops for getting knowledge about the animal and plant habitats. We mainly do fieldwork at this society.",
  },
];

export default function AccordionStyle() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {questions.map((question) => (
        <Accordion
          key={question.id}
          expanded={expanded === question.id}
          onChange={handleAccordionChange(question.id)}
          className="my-2 "
        >
          <AccordionSummary
            expandIcon={
              <KeyboardDoubleArrowDownIcon
                style={{
                  color: expanded === question.id ? "white" : "initial",
                  fontWeight: "bold",
                }}
                className="text-[12px]"
              />
            }
            aria-controls={`panel${question.id}-content`}
            id={`panel${question.id}-header`}
            style={{
              border: "3px solid #11463d",
              backgroundColor: expanded === question.id ? "#11463d" : "white",
              color: expanded === question.id ? "white" : "#11463d",
            }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              {question.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Array.isArray(question.details) ? (
              <ul style={{ fontSize: "14px", fontWeight: "semibold" }}>
                {question.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            ) : (
              <Typography style={{ fontSize: "14px", fontWeight: "semibold" }}>
                {question.details}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

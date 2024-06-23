import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const questions = [
  {
    id: 1,
    title: "Question 1",
    details:
      "We are AEWS, We work for the welfare of the animals as well as the environment. A socially active society which is only devoted to Animal help, care, and support. Not only animals, we do look after the plants and nurture them.",
  },
  {
    id: 2,
    title: "Question 2",
    details:
      "You can join us at AEWS by staying in touch with us as we recruit you by taking your interviews. An interview process is required to know you and your skills that will be helpful for our society.",
  },
  {
    id: 3,
    title: "Question 3",
    details:
      "We are not just a society, we are a Family. We work as a team. We teach and learn from each other by exchanging different ideas and experiences.",
  },
  {
    id: 4,
    title: "Question 4",
    details:
      "We have various domains as: i. General Volunteer (GV): We are very keen to learn and always ready to provide help and assistance in every possible way. ii. Research and Development (R&D): As the name suggests we provide technical and university-level bound solutions to the pre-existing environmental problems and calamities. iii. Public Relations (PR): We as PR coordinate with Veterinary Doctors and Environmentalists across the region and establish good connections for future references. iv. Social Media: We manage all technical domains and handles of the society. Irrespective of the domains we all are a volunteer first, along with additional responsibilities. We at AEWS work in unity.",
  },
  {
    id: 5,
    title: "Question 5",
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
          className="my-2 p-1"
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
              backgroundColor: expanded === question.id ? "#F97316" : "#67f7b9",
              color: expanded === question.id ? "white" : "#000",
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
            <Typography style={{ fontSize: "14px", fontWeight:"semibold" }}>
              {question.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

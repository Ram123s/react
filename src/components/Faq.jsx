import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Faq.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <Typography variant="h6">{title}</Typography>
        <IconButton>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <Typography>{content}</Typography>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const items = [
    {
      title: "What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $18 to $55 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      title: "How do I cancel?",
      content:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      content:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    },
  ];

  return (
    <div className="faq">
      <div className="container">
        <Typography variant="h4" className="faq-header">
          Frequently Asked Questions
        </Typography>
        <div className="accordion">
          {items.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
        <div>
          <Typography variant="h6" className="faq-subheader">
            Ready to watch? Enter your email to create or restart your membership.
          </Typography>
          <div className="email-formm">
            <input type="email" placeholder="Email address" />
            <button>Get Started &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

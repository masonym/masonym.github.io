import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './components/Card/Card.jsx'
import './App.css'

import projectImage1 from './assets/upcoming-sales.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Card
        imageSource={projectImage1}
        name="MapleStory Upcoming Sales Viewer"
        description="A React website built in conjunction with Python XML parsing to display upcoming cash shop sales for the MMORPG MapleStory."
        projectLink="https://masonym.dev/ms-upcoming-sales"
        gitHubLink="https://github.com/masonym/maple-cs-parser"
      />
      <Card
        imageSource={projectImage1}
        name="Chilliwack Med-spa Website"
        description="A website built in Wix and customized using the Velo API for advanced features such as booking addons."
        projectLink="https://phace.ca/"
      />
      <Card
        imageSource={projectImage1}
        name="Gigabyte Motherboard Chat Bot"
        description="A customer support chat bot using a fine-tuned large language model for Gigabyte motherboards."
        projectLink="https://github.com/BrianAtkinson93/COMP_482_NLP_Group_Project"
        gitHubLink="https://github.com/BrianAtkinson93/COMP_482_NLP_Group_Project"
      />
      <Card
        imageSource={projectImage1}
        name="Commands for CLI REST API"
        description="Stores helpful commands in a SQL server DB."
        projectLink="https://github.com/masonym/.NETCore_MVC_RESTAPI"
        gitHubLink="https://github.com/masonym/.NETCore_MVC_RESTAPI"
      />
      <Footer />
    </>
  );
}

export default App

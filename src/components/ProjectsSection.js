import React, { useState } from "react";
import Project1 from "../img/project1.jpg";
import Project2 from "../img/project2.jpg";
import Project3 from "../img/project3.jpg";
import Project4 from "../img/project4.jpg";
import Project5 from "../img/project5.jpg";
import Project6 from "../img/project6.jpg";
import {
  ProjectsContainer,
  ProjectsWrap,
  Project,
  ProjectsTitle,
  Text,
  ImgAndText,
} from "../components/ProjectsSectionElements";

const ProjectsSection = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <ProjectsContainer>
      <ProjectsTitle>Other Projects</ProjectsTitle>
      <ProjectsWrap>
        <ImgAndText>
          <Text>Florida, Miami</Text>
          <Project src={Project1}></Project>
        </ImgAndText>
        <ImgAndText>
          <Text> Mexico</Text>
          <Project src={Project2}></Project>
        </ImgAndText>
        <ImgAndText>
          <Text>Norway</Text>
          <Project src={Project3}></Project>
        </ImgAndText>
      </ProjectsWrap>
      <ProjectsWrap>
        <ImgAndText>
          <Text>Swiss Alps</Text>
          <Project src={Project6}></Project>
        </ImgAndText>
        <ImgAndText>
          <Text>California</Text>
          <Project src={Project4}></Project>
        </ImgAndText>
        <ImgAndText>
          <Text>Belgium</Text>
          <Project src={Project5}></Project>
        </ImgAndText>
      </ProjectsWrap>
    </ProjectsContainer>
  );
};

export default ProjectsSection;

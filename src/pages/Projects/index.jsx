import React from "react";
import { Row } from "antd";
import ProjectCard from "./ProjectCard";

function Projects() {
  const styles = {
    containerStyle: {
      marginTop: "64px",
      padding: "1rem"
    },
    imgStyle: {
      maxWidth: "100%",
      height: "20em"
    }
  };

  return (
    <div style={styles.containerStyle}>
      <Row gutter={[16, 16]}>
        <ProjectCard
          title="Sorting"
          alt="sorting card cover"
          link="/projects/sorting"
          bg="/resources/sorting_card_screen.jpg"
          description="A simple visualisation for sorting an array of elements using some popular sorting techniques"
        />
        <ProjectCard
          title="Rose Function"
          alt="rose card cover"
          link="/projects/rose"
          bg="/resources/rose_card_screen.jpg"
          description="Deconstructing the mathematical properties of the Rhodonea curve also known as the Rose function"
        />
        <ProjectCard
          title="Fourier Series"
          alt="fourier cover"
          link="/projects/fourier"
          bg="/resources/fourier_card_screen.png"
          description="Visualising the fourier series through a series of periodic curves."
        />
        <ProjectCard
          title="Portfolio Optimization"
          alt="poptimization cover"
          link="/projects/poptimization"
          bg="/resources/poptimization_card_screen.jpg"
          description="Obtaining the optimal portfolio through rebalancing of client holdings."
        />
      </Row>
    </div>
  );
};

export default Projects;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import undraw_location_search from "../undraw_location_search.svg";

const AboutPage = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100%",
    },
  };

  const transitions = {
    dampness: 100,
  };
  return (
    <AboutWrapper
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <div>
        <div className="about-image">
          <img src={undraw_location_search} alt="location search" />
        </div>
        <div className="about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet fringilla congue. Cras vel lacus augue. Donec pellentesque
            in tortor ac mattis. Phasellus porttitor rutrum fermentum. Aliquam
            ullamcorper arcu nec tellus laoreet volutpat. Maecenas dui urna,
            consequat vel gravida ac, molestie nec lacus. Fusce rhoncus, dui
            vitae sollicitudin rutrum, metus risus eleifend ex, at suscipit
            tortor tellus nec nibh. Suspendisse convallis lobortis lectus in
            hendrerit. Aliquam maximus leo justo, eu porta risus vulputate sed.
          </p>

          <p>
            Curabitur in accumsan nisl. Morbi ac tortor gravida, mollis augue a,
            tristique ipsum. In non tristique velit. Quisque consequat enim eget
            gravida ornare. Praesent sit amet vestibulum magna, at consequat
            mauris. Quisque elementum eu mauris vel commodo. Nam bibendum purus
            id maximus facilisis.
          </p>
        </div>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = motion.custom(styled.div`
  width: 100%;
  flex: 1 0 auto;
  padding-bottom: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .about {
      display: grid;
      grid-template-columns: repeat(autofit, minmax(250px, 1fr));
      grid-gap: 8px;
      width: fit-content;

      p {
        padding: 8px 60px;
      }
    }

    .about-image {
      width: 50%;
      padding-bottom: 24px;

      img {
        width: 60%;
        object-fit: scale-down;
      }
    }
  }

  @media (max-width: 800px) {
  }
`);

export default AboutPage;

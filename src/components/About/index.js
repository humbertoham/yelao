import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/about1.svg";
import Mision from "../../images/about2.svg";
import Vision from "../../images/about3.svg";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="acerca">
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Quiénes somos?</h1>
          <p>Falta información.</p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={MapP} />
        </MapC>
      </Content>

      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
        <Text>
          <h1>Misión</h1>
          <p>Falta información.</p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Visión </h1>
          <p>Falta información.</p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;

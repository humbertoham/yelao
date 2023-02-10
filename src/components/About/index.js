import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/about1.svg";
import Mision from "../../images/about2.svg";
import Vision from "../../images/about3.svg";
import Insight from "../../images/about4.svg";
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
          <h1>Filosofía</h1>
          <p>No vendemos terrenos, vendemos sueños y metas.</p>
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
          <p>Nuestra misión es tener siempre un lugar especial para ti.</p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Visión </h1>
          <p>Hacemos posible lo imposible.</p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={Insight} />
        </MapC>
        <Text>
          <h1>Llevate una parte de oaxaca.</h1>
         <p> Sé parte de oaxaca. </p>
<p>Sé parte del futuro. </p>
<p>Nosotros te damos la oportunidad de ser parte de oaxaca.</p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Insight} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;

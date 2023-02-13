import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper id="contacto">
      <Container>
        <Text>
          <h1>Contáctanos</h1>
        </Text>
        <Con className="ptp">
          <h1>
            <FontAwesomeIcon className="email" size="2x" icon={faEnvelope} />
            Email: yelaobienesraices@gmail.com
          </h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
           <a href="https://wa.link/ltmjtj"> +52 958 100 30 52</a>
          </h1>
        </Con>

        <Con className="pt">
          <h1>
            <FontAwesomeIcon className="pin" size="2x" icon={faMapMarkerAlt} />{" "}
            Ubicación: Calles Las Palmas Sección Primera, Col. Centro, San Pedro Pochutla, Oaxaca.
          </h1>
        </Con>
      </Container>
    </Wrapper>
  );
};

export default Contact;

import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30720.98156901484!2d-96.48509690398585!3d15.744647201244605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8d4d0cc357a4d%3A0x530327fd8a445a9a!2s70900%20San%20Pedro%20Pochutla%2C%20Oaxaca!5e0!3m2!1sen!2smx!4v1653787198759!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;

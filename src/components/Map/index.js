import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.170056444918!2d-96.47017318514571!3d15.74214058908375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c1a0954a750f715!2zMTXCsDQ0JzMxLjciTiA5NsKwMjgnMDQuNyJX!5e0!3m2!1sen!2smx!4v1676327970205!5m2!1sen!2smx" width="100%" height="400" ></iframe>

      </Container>
    </Wrapper>
  );
};

export default Map;

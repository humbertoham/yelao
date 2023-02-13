import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Men,
} from "./Exa.styles";
import Aos from "aos";
import "aos/dist/aos.css";

import work1 from "../../images/work.jpeg";

const Exa = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work1} />
          </CardHeader>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Exa;

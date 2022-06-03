import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton,
  Page,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import yaxen from "../../images/yaxen.png";
import yaxen2 from "../../images/yaxen2.JPG";
import yaxen3 from "../../images/yaxen3.jpg";
import yaxen4 from "../../images/yaxen4.jpg";
import yaxen5 from "../../images/yaxen5.jpg";

import laspalmas from "../../images/laspalmas.JPG";
import laspalmas2 from "../../images/laspalmas2.JPG";
import laspalmas3 from "../../images/laspalmas3.JPG";
import laspalmas4 from "../../images/laspalmas4.JPG";

import image2 from "../../images/banner.jpg";
import image3 from "../../images/banner.jpg";

import image5 from "../../images/banner.jpg";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const MenuSec = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Lotes</h1>
        <p>Estos son nuestros lotes </p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Yaa Xen</CardHeading>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={false}
              navigation={true}
              className="mySwiper"
            >
              {" "}
              <SwiperSlide>
                <Page src={yaxen} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={yaxen2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={yaxen3} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={yaxen4} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={yaxen5} />
              </SwiperSlide>
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                <p> 20 lotes disponibles</p>{" "}
                <p>
                  🛣️ VENTA DE LOTES SOBRE LA CARRETERA FEDERAL A 3 MINUTOS DEL
                  CRUCERO DE POCHUTLA
                </p>
                <p> 🏘️ 🏘️Lotes grandes desde 200m2 hasta 1,666m2</p>
                <p>🛣️ A 10 metros de la carretera federal 200 </p>
                <p>
                  {" "}
                  🚸A 3 minutos del crucero de Pochutla y a 5 minutos del
                  crucero de San Antonio
                </p>
                <p> 💦💡Con Proyecto de luz y agua</p>{" "}
                <p> 📃Con documento de posesión y sesión de derechos</p> 🖋️Pago
                al contado o a crédito <p> 🏡La mejor inversión </p>
                <p>🌄Al contado </p>
                <p>💲110,000</p>
                <p> 🏘️A crédito pagos mensuales desde $2,667 </p>
                <p>
                  Sólo por este mes de mayo lo puede enganchar con su primera
                  mensualidad 💯
                </p>
              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/w5Ae335ipoLKeSVs5"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Villa Dorada</CardHeading>
            <Page src={image2} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                <p>
                  {" "}
                  🛣️LOTES ECONOMICOS A UN COSTADO DE LA CARRETERA FEDERAL RUMBO
                  A HUATULCO Y A 5 MINUTOS DEL CRUCERO DE POCHUTLA🏠{" "}
                </p>{" "}
                <p> 📏 Lotes desde 200m2 hasta 1000m2.</p>
                <p>
                  {" "}
                  🛣️ A 20 metros de la carretera federal que va para Huatulco.{" "}
                </p>
                <p> 🎡A 6 minutos del crucero de Pochutla. </p>
                <p>
                  ⛵ A 30 minutos de Huatulco y a 15 minutos de Zipolite.
                </p>{" "}
                <p> 💦Con pozo de agua. 💡Luz Colindante.</p>
                <p> 🛣️Calles grandes de 10 metros.</p>
                <p>
                  {" "}
                  🏡La mejor inversión siempre va ser en una propiedad.
                </p>{" "}
                <p> 🛒Pago al contado y a credito </p>
                <p>🛒Al contado $325 el m2 </p>
                <p>🛒 A credito a un plazo de 2 años $400 el m2</p>
              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/4M2r5TKmvYuNYhN78"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Vista Hermosa</CardHeading>
            <Page src={image3} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                <p>
                  {" "}
                  🏡 PREVENTA DE LOTES A UN COSTADO DEL BARATILLO , EN LA
                  COLONIA LOMA LARGA 🛣️🏘️
                </p>{" "}
                <p> 🏘️Lotes de diferentes tamaños desde 200m2 hasta 490m2 </p>
                <p>🚊Calles de 8 y de 10 metros</p>
                <p> 🛣️ A 200 metros del libramiento de Pochutla.</p>
                <p>
                  {" "}
                  🚸A 3 minutos de la Universidad REU, Esc. Sec. Federal #114,
                  Primarias y a 5 minutos del centro la Ciudad de San Pedro
                  Pochutla.
                </p>
                <p> 💡Proyecto de Luz Subterranea... </p>
                <p>💦Agua colindante.</p>
                <p>📃Con documento de posesión y sesión de derechos. </p>{" "}
                <p> 🖋️Pago al contado o a crédito.</p>
                <p>🌄Al contado $450 el m2</p>
                <p> 🏘️A crédito Hasta un plazo de 36 meses</p>
                <p> 💰Tu mejor opción en inversión..</p>
              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/fifNneg2553uar5q8"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Las Palmas</CardHeading>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={false}
              navigation={true}
              className="mySwiper"
            >
              {" "}
              <SwiperSlide>
                <Page src={laspalmas} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={laspalmas3} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={laspalmas2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={laspalmas4} />
              </SwiperSlide>
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                <p>
                  {" "}
                  🌊🐢 LOTES A 5 MINUTOS DE MAZUNTE FRACCIONAMIENTO "RESIDENCIAL
                  LAS PALMAS" 🌴🦀 🏖️
                </p>{" "}
                <p>
                  {" "}
                  🏘️Lotes de diferentes tamaños desde 185m2 hasta 438m2{" "}
                </p>{" "}
                <p>🚊Calles de 8 metros </p>
                <p>
                  🛣️ A 80 metros de la carretera estatal que va para mazunte 🦀
                </p>{" "}
                <p> 🚸A 3 minutos del crucero de San Antonio.</p>
                <p> 💦💡Con Proyecto de luz y agua. </p>
                <p>🌴2 palmeras en la compra de un lote.</p>{" "}
                <p>📃Con documento de posesión y sesión de derechos</p>{" "}
                <p>🖋️Pago al contado o a crédito</p>
                <p>🏡La mejor inversión</p>
                <p> 🌄Al contado $850 el m2</p>
                <p> 🏘️A crédito Hasta un plazo de 36 meses</p>
              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/Wr5uA7Co543EkzoK6"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Las Brisas</CardHeading>
            <Page src={image5} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                <p>🏖️ LOTES CERCA DE VENTANILLA Y PLAYA MAZUNTE 🌊</p>
                <p>🏘️Lotes de 10 x 20 Metros</p>{" "}
                <p>🚕A 50 Metros de la carretera federal que va a Mazunte </p>{" "}
                <p>
                  🌊A 3 Minutos de Ventanilla, 5 Minutos de Mazunte y a 7
                  Minutos de San Agustinillo
                </p>
                <p>
                  {" "}
                  🛣️Cuenta con acceso, todos los lotes con calles grandes de 8
                  metros{" "}
                </p>
                <p>🧾Con documento de posesión </p>
                <p>🛒Pago al contado o a crédito</p>
                <p> 🏖️La mejor inversión por la alta plusvalia</p>{" "}
                <p>🎉Al Contado 🎉 $125,000</p>
                <p> 😱 *A 36 Meses sin intereses</p>
                <p>🎊 PAGOS MENSUALES DE $3,889</p>
              </CardOptionsNote>
              <CardButton target="_blank" href="/">
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default MenuSec;

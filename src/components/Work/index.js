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
  Message,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import yaxen from "../../images/yaxen/image1.jpeg";

import yaxen4 from "../../images/yaxen/image4.jpeg";
import yaxen5 from "../../images/yaxen/image5.jpeg";

import palmas1 from "../../images/palmas/image1.jpeg";
import palmas2 from "../../images/palmas/image2.jpeg";

import zapote1 from "../../images/zapote/image1.jpeg";
import zapote2 from "../../images/zapote/image2.jpeg";
import zapote3 from "../../images/zapote/image3.jpeg";

import palmas3 from "../../images/palmas/image3.jpeg";

import dorada1 from "../../images/dorada/image1.jpeg";
import dorada2 from "../../images/dorada/image2.jpeg";

import azalea1 from "../../images/itsimo/image1.jpeg";
import azalea2 from "../../images/itsimo/image2.jpeg";
import azalea3 from "../../images/itsimo/image3.jpeg";

import vista1 from "../../images/hermosa/image1.jpeg";
import vista2 from "../../images/hermosa/image2.jpeg";
import vista3 from "../../images/hermosa/image3.jpeg";


import linda1 from "../../images/vista/image1.jpeg";
import linda2 from "../../images/vista/image2.jpeg";
import linda3 from "../../images/vista/image3.jpeg";

import diamante from "../../images/diamante/image1.jpeg";
import diamante2 from "../../images/diamante/image2.jpeg";

import xhunaxhi from "../../images/xhunaxhi/image1.jpeg";
import xhunaxhi2 from "../../images/xhunaxhi/image2.jpeg";
import xhunaxhi3 from "../../images/xhunaxhi/image3.jpeg";

import tec from "../../images/tec/image1.jpeg";
import tec2 from "../../images/tec/image2.jpeg";
import tec3 from "../../images/tec/image3.jpeg";
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
            <CardHeading>RESIDENCIAL LAS PALMAS</CardHeading>
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
                <Page src={palmas1} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={palmas2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={palmas3} />
              </SwiperSlide>
            
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
          <p>  🌊🐢 VENTA DE 2 LOTE A 5 MINUTOS DE MAZUNTE FRACCIONAMIENTO "RESIDENCIAL LAS PALMAS" 🌴🦀 🏖️</p>  
          <p>
🏘️Lote de 201.00m² y 222.00m²</p>  <p>
🚊Calles de 8 metros</p>  <p>
🛣️ A 150 metros de la carretera estatal que va para mazunte 🦀</p>  <p>
🚸A 3 minutos del crucero de San Antonio.</p>  <p>
💦💡Con Proyecto de luz y agua.</p>  <p>
🌴2 palmeras en la compra.</p>  <p>
📃Con documento de posesión y sesión de derechos</p>  <p>
🖋️Pago al contado o a crédito</p>  <p>
🏡La mejor inversión</p>  <p>

🌄Al contado $200,000 (6 meses sin intereses)</p>  <p>
🏘️A crédito Hasta un plazo de 48 meses con pagos mensuales de 5,417</p>  
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
            <CardHeading>Flor de Azalea</CardHeading>
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
                <Page src={azalea1} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={azalea2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={azalea3} />
              </SwiperSlide>
            
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
             <p> 🚋⛽ PREVENTA DE LOTES A UN COSTADO DE LA CARRETERA TRANSISTMICA EN LA NORIA🚉🚞</p> <p>

🏘️Lotes planos de 10x20, 200m2.</p> <p>
🚗 Calles de 10  metros.</p> <p>
🏁A 300 metros de la carretera transistmica. </p> <p>
🎓Atrás de la universidad Vizacaya de Las Américas.</p> <p>
🚉 A 400 metros donde pasara el corredor interoceánico.</p> <p>
🌇A 3 minutos de las diferentes agencias de auto.</p> <p>
📍A 5 minutos de Liverpool y de la plaza Pabellón.</p> <p>
🚿 Con proyecto de agua a 12 meses.</p> <p>
🌳 Con variedad de árboles </p> <p>
📃Contrato y documento de posesión y sesión de derechos, con respaldo legal.</p> <p>
🖋️Pago al contado o a crédito.</p> <p>

🚉Al contado $110,000 (6 meses sin intereses)</p> <p>
🏘️A crédito Hasta un plazo de 24 meses, con pagos mensuales de $5,417</p> <p>

💰Tu mejor opción en inversión..</p>

              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/HZwujJuH7o5dm2oq7"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Vista Hermosa</CardHeading>
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
                <Page src={vista1} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={vista2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={vista3} />
              </SwiperSlide>
            
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
            <p>  🏡 VENTA DE 2 LOTES A UN COSTADO DEL BARATILLO , EN LA COLONIA LOMA LARGA 🛣️🏘️</p>  <p>

🏘️Lotes de 200m²</p>  <p>
🚊Calles de 8 y de 10 metros</p>  <p>
🛣️ A 200 metros del libramiento de Pochutla.</p>  <p>
🚸A 3 minutos de la Universidad REU, Esc. Sec. Federal #114, Primarias y a 5 minutos del centro la Ciudad de San Pedro Pochutla.</p>  <p>
💡Proyecto de Luz Subterranea...</p>  <p>
💦Agua colindante.</p>  <p>
📃Con documento de posesión y sesión de derechos.</p>  <p>
🖋️Pago al contado o a crédito.</p>  <p>

🌄Al contado $150,000</p>  <p>
🏘️A crédito Hasta un plazo de 60 meses </p>  <p>

💰Tu mejor opción en inversión</p>

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
             <p> 🛣️ VENTA DE LOTES SOBRE LA CARRETERA FEDERAL A 3 MINUTOS DEL CRUCERO DE POCHUTLA 🏘️</p><p>

🏘️Lotes grandes desde 200m2 hasta 1,666m2</p><p>
🛣️ A 10 metros de la carretera federal 200</p><p>
🚸A 3 minutos del crucero de Pochutla y a 5 minutos del crucero de San Antonio</p><p>
💦💡Con Proyecto de luz y agua</p><p>
📃Con documento de posesión y sesión de derechos</p><p>
🖋️Pago al contado o a crédito</p><p>
🏡La mejor inversión</p><p>

🌄Al contado 💲110,000</p><p>
🏘️A crédito pagos mensuales desde $2,667</p><p>

Sólo por este mes de mayo lo puede enganchar con su primera mensualidad 💯</p>

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
                <Page src={dorada1} />
              </SwiperSlide>
            
              <SwiperSlide>
                <Page src={dorada2} />
              </SwiperSlide>
              
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
             <p> 🏖️🚦 VENTA DE LOTES A UN COSTADO DE LA CARRETERA FEDERAL 200 JUAN DIEGAL🚏🚐</p><p>

Fraccionamiento Villa Dorada 🔔</p><p>

🏘️Lotes desde 10x20 200m² hasta 400m²</p><p>
🚗 Calles de 8  metros.</p><p>
🏁 A 50 metros de la carretera federal. </p><p>
🌊 A 20 minutos de la playa de Tembo.</p><p>
🌇A 6 minutos del crucero de Pochutla .</p><p>
📍A 8 minutos de Pochutla </p><p>
🚏 Señalamientos de calles.</p><p>
💦 Con pocero de agua.</p><p>
🌳 Con variedad de árboles </p><p>
📃Contrato y documento de posesión y sesión de derechos, con respaldo legal.</p><p>
🖋️Pago al contado o a crédito.</p><p>

🚉Al contado $70,000 (6 meses sin intereses)</p><p>
🏘️A crédito Hasta un plazo de 60 meses, con pagos mensuales de $2,000</p><p>

💰Tu mejor opción en inversión..</p>

              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/hABKy5mEaT7CCesb9"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>El Zapote</CardHeading>
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
                <Page src={zapote1} />
              </SwiperSlide>
            
              <SwiperSlide>
                <Page src={zapote2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={zapote3} />
              </SwiperSlide>
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
            <p> 🛣️LOTES ECONOMICOS CERCA DEL LIBRAMIENTO DE POCHUTLA🏠</p> 
            <p>
📏 Lotes desde 200m2 hasta 500m2.</p> <p>
🛣️ A 160 metros del libramiento de Pochutla.</p> <p>
🎡A 8 minutos del centro de Pochutla.</p> <p>
🏣 A 4 minutos de la universidad REU y de la secundaria Técnica #114.</p> <p>
💦Con proyecto de agua </p> <p>
🛣️Calles grandes de 10 metros.</p> <p>
🏡La mejor inversión siempre va ser en una propiedad.</p> <p>
🛒Pago al contado y a credito </p> <p>

🛒Al contado $70,000</p> <p>

🛒 A credito pagos mensuales desde  $2,000</p> 

              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/DeSyB56DLZoxagnm8"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Fraccionamiento Diamante</CardHeading>
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
                <Page src={diamante} />
              </SwiperSlide>
            
              <SwiperSlide>
                <Page src={diamante2} />
              </SwiperSlide>
          
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
            <p> 💎🌊 PREVENTA DE LOTES A UN COSTADO DE LA CARRETERA ESTATAL QUE VA PARA MAZUNTE 🦀💎</p>  <p> 

Fraccionamiento Diamante</p>  <p> 

🏘️Lotes planos desde 200m² hasta 313m²</p>  <p> 
🚗 Calles de 8 metros.</p>  <p> 
🏁A 300 metros de la carretera estatal que va a Mazunte 🦀</p>  <p> 
🦀A  6 minutos del pueblo mágico Mazunte.</p>  <p> 
🐊 A 4 minutos de playa ventanilla.</p>  <p> 
🚏 Señalamientos de calles.</p>  <p> 
🌳 Con variedad de árboles </p>  <p> 
📃Contrato y documento de posesión y sesión de derechos, con respaldo legal </p>  <p> 
🖋️Pago al contado o a crédito.</p>  <p> 

🚉Al contado $110,000 (6 meses sin intereses)</p>  <p> 
🏘️A crédito Hasta un plazo de 60 meses, con pagos mensuales de $2,667</p> 
<p> 
💰Tu mejor opción en inversión..</p> 


              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/JFJXhWhGg22KimpD6"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Fraccionamiento Xhunaxhi</CardHeading>
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
                <Page src={xhunaxhi} />
              </SwiperSlide>
            
              <SwiperSlide>
                <Page src={xhunaxhi2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={xhunaxhi3} />
              </SwiperSlide>
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
              <p>🦀🦐 VENTA DE LOTES EN LA ENTRADA A LA LAGUNA DE CHACAHUA A 2 MINUTOS DEL CRUCERO DE SAN ANTONIO 👨‍👩‍👦‍👦🚦</p>
              <p>
🏘️Lotes planos de 10 x 20 metros 200m2.</p><p>
🛣️ A 400 metros de la carretera federal.</p><p>
⛽ A 500 metros de la nueva gasolinera.</p><p>
🦐 A 10 minutos de Chacahua.</p><p>
🐢A 10 minutos de Mazunte.</p><p>
🌊 A 15 minutos de Zipolite.</p><p>
📃Con documento de posesión y sesión de derechos</p><p>
🖋️Pago al contado o a crédito</p><p>
🏡La mejor inversión</p>
<p>
🌄Al contado 💲100,000</p><p>
🏘️A crédito pagos mensuales desde $2,500</p><p>

Sólo por este mes de noviembre lo puede enganchar con su primera mensualidad 👌</p>


              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/64e9FugaZAcwTMbi7"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Fraccionamiento El Tecnológico</CardHeading>
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
                <Page src={tec} />
              </SwiperSlide>
            
              <SwiperSlide>
                <Page src={tec2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={tec3} />
              </SwiperSlide>
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
            <p> 👨‍🎓🏡 VENTA DE LOTES A UN COSTADO DEL TECNOLOGICO DE POCHUTLA 🏫</p> <p>

Fraccionamiento El Tecnológico</p> <p>

🏘️Lotes de diferentes tamaños desde 250m2 hasta 388m2.</p> <p>
🚗 Calles de 8  metros.</p> <p>
👨‍🎓A 100 metros de Tecnológico de Pochutla.</p> <p>
👩‍🎓A 2 minutos del Cbta 37.</p> <p>
🛣️ A 600 metros de la carretera estatal Oaxaca-pto Angel.</p> <p>
🚏 Señalamientos de calles.</p> <p>
🌳 forestación de todo el fraccionamiento.</p> <p>
📃Contrato y documento de posesión y sesión de derechos.</p> <p>
🖋️Pago al contado o a crédito.</p> <p>

🌄Al contado $70,000 (6 meses sin intereses)</p> <p>
🏘️A crédito Hasta un plazo de 60 meses con pagos mensuales de $1,999</p> <p>

💰Tu mejor opción en inversión..</p> 


              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/grAP1KruEtp5zc718"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Fraccionamiento Linda Vista</CardHeading>
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
                <Page src={linda1} />
              </SwiperSlide>
            
              <SwiperSlide>
                <Page src={linda2} />
              </SwiperSlide>
              <SwiperSlide>
                <Page src={linda3} />
              </SwiperSlide>
            </Swiper>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
            <p> 🌞📍 PREVENTA DE LOTES A 1KM DEL CENTRO DE TONAMECA  👨‍👩‍👦‍👦🏡</p>   <p>  

FRACCIONAMIENTO LINDA VISTA🌞😍</p>    <p> 

🏘️Lotes desde 200m² hasta 312m²</p>    <p> 
💡💦 Con proyecto de luz y agua (12 meses máximo)</p>    <p> 
🏁Calles de 8 metros de ancho.</p>    <p> 
🛣️ A 1km de Tonameca </p>    <p> 
🏊‍♀️ A 2km del río de Frutilla.</p>    <p> 
🐢A 20 minutos de Mazunte.</p>    <p> 
🌊 A 25 minutos de Zipolite.</p>    <p> 
📃Con documento de posesión y sesión de derechos.</p>    <p> 
🖋️Pago al contado o a crédito</p>    <p> 
🏡La mejor inversión</p>    <p> 

🌄Al contado 💲90,000</p>    <p> 
🏘️A crédito pagos mensuales desde $3,333</p> 


              </CardOptionsNote>
              <CardButton
                target="_blank"
                href="https://maps.app.goo.gl/U7Jgve5wztVGgJDe7"
              >
                Ubicación 📍
              </CardButton>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
      <Message href="https://wa.link/ltmjtj">Contáctanos</Message>
    </Wrapper>
  );
};

export default MenuSec;

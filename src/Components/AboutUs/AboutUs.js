import React from "react";
import "./AboutUs.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
// Импорт фотографий
import img1 from "./img/img-1.jpg";
import img2 from "./img/img-2.jpg";
import img3 from "./img/img-3.jpg";
import price from "./img/price.jpeg";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Обертка и блоки */}
      <Container fluid className="about-us__block caffe-brand">
        <Container>
          <Row>
            <Col lg>
              <img src={img1} alt="Coffee beans" />
            </Col>
            <Col lg>
              <img src="" alt="" />
              <h1>Resnichki-KG - это брэнд</h1>
              <p>
                Наш бизнес начался с мечты Шабдана Турсункулова создать салон,
                где каждая женщина могла бы подчеркнуть свою природную красоту.
                Обладая более чем десятью годами опыта в индустрии красоты,
                Шабдан заметил потребность в долговременных решениях для ухода
                за ресницами. После многочисленных курсов и тренингов по
                ламинированию ресниц, в 2018 году он открыл наш салон.
              </p>
              <p>
                Благодаря профессионализму и использованию высококачественных
                материалов, мы быстро завоевали репутацию одного из лучших в
                городе. Сегодня мы продолжаем радовать клиентов красивыми и
                здоровыми ресницами.
              </p>
              {/* Ссылка на скачивание с диска */}
              <a className="about-us__button" href={price} download>
                Скачать прайс
              </a>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="about-us__block">
        <Container>
          <Row>
            <Col lg>
              <h2>Почему мы?</h2>
              <p>
                Без ущерба для качества Resnichki-KG предлагает
                конкурентоспособные цены как для самого продукта, так и для
                доставки.
              </p>
              <p>
                Нашим приоритетом является удовлетворение клиента, и вы можете
                быть уверены, что вы получите всю помощь во время работы с нами.
              </p>
            </Col>
            <Col lg>
              <img src={img2} alt="Our advantages" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="about-us__parallax parallax__1"></Container>

      <Container fluid className="about-us__block">
        <Container>
          <Row>
            <Col lg>
              <img src={img3} alt="Coffee beans" />
            </Col>
            <Col lg>
              <h2>Что это такое?</h2>
              <p>
                Ламинирование ресниц — это процедура, придающая вашим ресницам
                изящный изгиб, объем и блеск без ежедневного использования туши.
                С помощью специального состава, обогащенного кератином и
                витаминами, ресницы укрепляются, становятся более густыми и
                здоровыми. Процедура занимает около часа, и эффект длится до 6-8
                недель, даря вам выразительный и ухоженный взгляд на долгое
                время.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default AboutUs;

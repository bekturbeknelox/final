import React from "react";
import "./ProductCardItem.scss";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import prodimg from "./img/prod1.jpg";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardItem = ({ to, title, price, weight, img }) => {
  const [isLoading, setIsLoading] = useState(true);
  // Для рендеринга скелета
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* {dbimg.map((item) => ( */}
      <Card className="catalog__card">
        <Link to={to}>
          {isLoading ? (
            <Skeleton className="img__skeleton" /> // Здесь вы можете настроить размеры заглушки
          ) : // <Card.Img className="img__skeleton" variant="top" src="placeholder.png" alt={title}/>
          null}
          <Card.Img
            variant="top"
            src={prodimg}
            alt={title}
            style={{ display: isLoading ? "none" : "grid" }}
            onLoad={handleImageLoad}
          />
        </Link>
        <Link to={to}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <span className="weight">
                Масса нетто:{" "}
                <span className="weight__inner">{weight} грамм</span>{" "}
              </span>
              <span className="price">
                Цена: <span className="price__inner">{price} сом</span>
              </span>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
      {/* ))} */}
    </>
  );
};

export default ProductCardItem;

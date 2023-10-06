import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { GiSpaceship } from "react-icons/gi";
import "../scss/flashsale.scss";
import img1 from "../image/jupiter2.png";
import img2 from "../image/saturn4.png";
import img3 from "../image/moon2.png";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Way to Jupiter",
    location: "Jupiter",
    grade: "discover Jupiter",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Way to Saturn",
    location: "Saturn",
    grade: "discover Saturn",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Way to Moon",
    location: "Moon",
    grade: "discover Moon",
  },
];

// const FlashSale = ({ product }) => {
const FlashSale = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From the outside of the world, Come see the best of the space!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeft className="icon leftIcon" />
            <BsArrowRight className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="voyege">
                        <GiSpaceship className="icon" />
                      </span>
                      Space Voyege
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    // <Card className="my-3 p-3 rounded">
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant="top" />
    //   </Link>

    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as="div">
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Card.Text as="div">
    //       <Rating
    //         value={product.rating}
    //         text={`${product.numReviews} reviews`}
    //       />
    //     </Card.Text>

    //     <Card.Text as="h3">${product.price}</Card.Text>
    //   </Card.Body>
    // </Card>
  );
};

export default FlashSale;

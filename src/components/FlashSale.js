import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { GiSpaceship } from "react-icons/gi";
import "../scss/flashsale.scss";
import jupiter from "../image/saturn4.png";



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

        <div className="mainContent flex">
          <div className="singleDestination">
            <div className="destImage">
              <img src={jupiter} alt="" />

              <div className="overlayInfo">
                <h3>some text</h3>
                <p>Lorem ipsum dolor sit amet.</p>

                <BsArrowRightShort className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">01</div>

              <div className="destText flex">
                <h6>Mars</h6>
                <span className="flex">
                  <span className="voyege">
                    <GiSpaceship className="icon" />
                  </span>
                  Space Voyege
                </span>
              </div>
            </div>
          </div>
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

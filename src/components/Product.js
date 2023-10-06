import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { MdKingBed, MdLocationOn } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { GiRocketThruster } from "react-icons/gi";
import { BsArrowRightShort } from "react-icons/bs";
import "../scss/product.scss";
import img1 from "../image/h4.jpg";
import img2 from "../image/h5.jpeg";
import img3 from "../image/h5.png";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Starlex",
    location: "Jupiter",
    grade: "discover Jupiter",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "PlexUs",
    location: "Moon",
    grade: "discover PlexUs",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "EXostar",
    location: "Saturn",
    grade: "discover EXostar",
  },
];

const Product = ({ product }) => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Out of the boundary Of the World, come see the best of the Planets!
          </p>
        </div>

        <div className="mainContent grid">
          <div className="singleOffer">
            <div className="destImage">
              <img src={img1} alt="" />

              <span className="discount">30% off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$ 1M</h4>
                <span className="status">For Rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon" />
                  <small>2 Beds</small>
                </div>
                <div className="singleAmenity flex">
                  <MdBathtub className="icon" />
                  <small>1 Bath</small>
                </div>
                <div className="singleAmenity flex">
                  <FaWifi className="icon" />
                  <small>Wi-Fi</small>
                </div>
                <div className="singleAmenity flex">
                  <GiRocketThruster className="icon" />
                  <small>Ship</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className="icon" />
                <small>Moon, 363 104 km</small>
              </div>

              <button className="btn flex">
                View Details
                  <BsArrowRightShort className="icon"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <Card className='my-3 p-3 rounded'>
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant='top' />
    //   </Link>

    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as='div'>
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Card.Text as='div'>
    //       <Rating
    //         value={product.rating}
    //         text={`${product.numReviews} reviews`}
    //       />
    //     </Card.Text>

    //     <Card.Text as='h3'>${product.price}</Card.Text>
    //   </Card.Body>
    // </Card>
  );
};

export default Product;

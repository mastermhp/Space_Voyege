import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import "../css/ProductCarousel.css";
import ship from "../image/ship11.png";
import ss1 from "../image/ss4.png";
import as2 from "../image/arsuit2.png";
import m1 from "../image/mask1.png";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel data-bs-theme="dark" className="wrapper">
      <Carousel.Item>
        <img className="d-block w-20" src={as2} alt="Second slide" />
        <Carousel.Caption>
          <h5>Space Suit</h5>
          <p>Space Suit According to Future Concept.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-20" src={m1} alt="First slide" />
        <Carousel.Caption>
          <h5>Astraunaut Mask</h5>
          <p>Astraunaut Mask According to Future Concept.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-20" src={ship} alt="First slide" />
        <Carousel.Caption>
          <h5>Space Ship</h5>
          <p>Space Ship According to Future Concept.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-20" src={ss1} alt="Third slide" />
        <Carousel.Caption>
          <h5>Space Station</h5>
          <p>Space Station According to Future Concept.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <div className="container">
    //   <div className="wrapper">
    //     <div className="wrapper-holder">
    //       <div id="slider-img-1" className="d-flex align-items-center"></div>
    //       <div id="slider-img-2"></div>
    //       <div id="slider-img-3"></div>
    //       <div id="slider-img-4"></div>
    //     </div>
    //   </div>
    //   <div className="button-holder">
    //     <Link to="#slider-img-1" className="button"></Link>
    //     <Link to="#slider-img-2" className="button"></Link>
    //     <Link to="#slider-img-3" className="button"></Link>
    //     <Link to="#slider-img-4" className="button"></Link>
    //   </div>
    // </div>

    //  <Carousel pause="hover" className="carousel">
    //           {products.map((product) => (
    //         <Carousel.Item key={product._id}>
    //           <Link to={`/product/${product._id}`}>
    //             <Image src={product.image} alt={product.name} fluid />
    //             <Carousel.Caption className="carousel-caption">
    //               <h2>
    //                 {product.name} (${product.price})
    //               </h2>
    //             </Carousel.Caption>
    //           </Link>
    //         </Carousel.Item>
    //       ))}
    //     </Carousel>
  );
};

export default ProductCarousel;

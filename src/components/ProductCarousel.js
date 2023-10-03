import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import "../css/ProductCarousel.css";
import s1 from "../image/s9.jpeg";

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
    <div className="container">
      <div className="wrapper">
        <div className="wrapper-holder">
          <div id="slider-img-1"></div>
          <div id="slider-img-2"></div>
          <div id="slider-img-3"></div>
          <div id="slider-img-4"></div>
        </div>
          </div>
          <div className="button-holder">
            <Link to="#slider-img-1" className="button"></Link>
            <Link to="#slider-img-2" className="button"></Link>
            <Link to="#slider-img-3" className="button"></Link>
            <Link to="#slider-img-4" className="button"></Link>
          </div>
    </div>

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

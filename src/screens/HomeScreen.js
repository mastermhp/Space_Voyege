import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import FlashSale from "../components/FlashSale";
import Category from "../components/Category";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import "../scss/home.scss";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">Plan Your Trip With Space Voyege</h1>

            <p className="subTitle">
              Travel To your favorite Planet through vr, game or in person by
              taking our amazingly fast and secure services.
            </p>

            <button className="btn">
              <a href="#">Explore Now</a>
            </button>
          </div>

          <div className="homeCard grid">
            <div className="locationDiv">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Dream Destination" />
            </div>

            <div className="distDiv">
              <label htmlFor="destination">Destination</label>
              <input type="text" placeholder="11k/Meters/" />
            </div>

            <div className="priceDiv">
              <label htmlFor="location">Price</label>
              <input type="text" placeholder="$1m/($2-$5)" />
            </div>

            <button className="btn">Search</button>

          </div>
        </div>
      </section>

      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )} */}

      {/* <h1>Flash Sale</h1> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <FlashSale />
            {/* {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <FlashSale product={product} />
              </Col>
            ))} */}
          </Row>
        </>
      )}

      {/* <h1>Categories</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={4} lg={2} xl={2}>
                <Category product={product} />
              </Col>
            ))}
          </Row>
        </>
      )} */}
      {/* 
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )} */}
    </>
  );
};

export default HomeScreen;

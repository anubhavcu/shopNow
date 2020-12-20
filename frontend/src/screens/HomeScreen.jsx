import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

//  useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await axios.get("api/products");
//       const data = res.data;
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

/**Notes
 *  1.  useEffect is used for now for component level state, but products will be an app level state which later will be handled with redux
 * 2. we're using axios to fetch products, instead of using .then syntax we have used async and await type syntax, so we wouldn't be able to make the arrow function (inside of useEffect) as async, so we have created a seperate async function fetchProduct which fetches the product from the server, and then later inside useEffect itself we have called that function
 * 3. useState is to make the component level state for arrow based components (for class based components we defined state in constructor of the class) - takes two params- stateName, and the method which will change the state. also a default value of state is passed in useState(in this case is an empty array)
 * 3.1. useEffect will run as soon as the component loads, so fetched the data in useEffect component
 * 4. also added the proxy in package.json file to avoid CORS error. while fetching the data above our frontend server is running at localhost:3000, but our backend server is running at localhost:5000, so axios is trying to fetch from localhost:5000/api/products, and above we haven't defined that, and if we define that we would get a CORS error. to avoid that we add as proxy:http://127.0.0.1:5000 so that instead of looking at localhost:3000 it will check at localhost:5000/....
 */

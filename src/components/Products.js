import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProducts = await response.json();
    setProducts(dataProducts);
    // console.log(products);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center">Data Products</h1>
        {products.map((product) => {
          return (
            <div className="col-lg-3">
              <CardProduct
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="text-muted">{props.price}$</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Products;

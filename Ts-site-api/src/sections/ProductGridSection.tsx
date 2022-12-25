import React from "react";
import ProductCard from "../assets/scss/components/ProductCard";
import { Product } from "../types";

type PropsType = {
  products: Product[];
  title: string;
};

const ProductGridSection = ({ title, products }: PropsType) => {
  return (
    <section className="product-grid">
      <h1>{title}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;

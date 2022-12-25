import React, { useEffect, useState,Dispatch,SetStateAction } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";

const ProductDetailsView = ({ products,setProducts }: { products: Product[], setProducts:Dispatch<SetStateAction<Product[]>>}) => {
  let [product, setProduct] = useState<Product | null>({} as Product);
  let [hovered, setHovered] = useState<boolean>(false);
  let [editable, setEditable] = useState<boolean>(false);
  let [value, setValue] = useState<number>(0);
  let navigate = useNavigate()

  if (window && window.top) {
    window.top.document.title = "Products Fixxo.";
  }
  const { id } = useParams();
  const addToWishList = (e: React.MouseEvent) => {
    console.log(`${e.target} "added to wish list"`);
  };

  const addToCompare = () => {
    console.log("added to comapare");
  };

  const addToCart = () => {
    console.log("added to shopping cart");
  };
  const handleSave = () => {
    fetch(`/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "price": `$${value}`
      })
    }).then(d=>d.json()).then(d=>console.log(d))
    let newProductIndex = products.findIndex((p) => p._id === id || "");
    products[newProductIndex].price = `$${value}`
    setProducts([...products])
    setEditable(false)
  };

  useEffect(() => {
    let newProduct = products.find((p) => p._id === id || "");
    if (newProduct) {
      setProduct(newProduct);
      setValue(parseFloat(newProduct.price.replace("$", "")));
    } else {
      setProduct(null);
    }
  }, [id]);

  function deleteHandler(id: string | null) {
    if (id) {
      fetch(`/products/${id}`, { method: 'DELETE' }).then(d => d.json()).then(() => {
        let filtered = products.filter(i => i._id !== id)
        setProducts(filtered)
        navigate('/products')
      })
    }
  }

  return (
    <>
      <div className="container mt-5 product-grid detail">
        <div className="col">
          {product ? (
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="card">
                <div className="card-img">
                  <img src={product.img} alt={product.name} />
                  <div className="card-menu">
                    <button onClick={addToWishList} className="menu-link">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                    <button onClick={addToCompare} className="menu-link">
                      <i className="fa-regular fa-code-compare"></i>
                    </button>
                    <button onClick={addToCart} className="menu-link">
                      <i className="fa-regular fa-bag-shopping"></i>
                    </button>
                  </div>
                  <button
                    className="btn-theme btn-card-theme"
                    onClick={()=>deleteHandler(product&&product._id)}
                  >
                    DELETE
                  </button>
                </div>
                <div className="card-body">
                  <p className="card-category">{product.category}</p>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </p>
                  <div
                    className="d-flex justify-content-center align-items-baseline"
                    style={{ gap: "5px" }}
                    onMouseOver={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    {editable ? (
                      <>
                        <span>$</span>
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => setValue(parseFloat(e.target.value))}
                        />
                      </>
                    ) : (
                      <p className="card-price">{product.price}</p>
                    )}
                    {
                      (editable ? (
                        <i
                          className="fa-solid fa-floppy-disk"
                          onClick={handleSave}
                        ></i>
                      ):hovered &&(
                        <i
                          className="fa-solid fa-pencil"
                          onClick={() => setEditable(true)}
                        ></i>
                      ) )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>no product with such id</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsView;

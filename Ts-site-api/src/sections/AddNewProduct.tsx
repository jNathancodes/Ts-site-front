import { useState,Dispatch,SetStateAction } from 'react'
import {Product} from '../types'

export default function AddNewProduct({ addProduct }:{addProduct:(arg0:Product)=>void}) {
  let [product, setProduct] = useState<Product>({} as Product)
  
  function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;
    setProduct({...product, [name]:value})
  }
  function handleSubmit(){
    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(product)
    }).then(d=>d.json()).then(addProduct)
  }


  return (
    <div className="d-flex justify-content-center mb-5">
      <button
        type="button"
        className="btn btn-primary margin-auto"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add new product
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                New Product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Product name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  name="name"
                  value={product.name||''}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Product category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={product.category||''}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Product price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={product.price||''}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">
                  Product image url
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  name="img"
                  aria-describedby="imageUrlHelp"
                  value={product.img||''}
                  onChange={handleInput}
                />
                <div id="imageUrlHelp" className="form-text">
                  Absolute image url address
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

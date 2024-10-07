import React, { useEffect, useState } from "react";

function Content() {
  const [data, setdata] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let result = await fetch("https://fakestoreapi.com/products");
      setdata(await result.json());
    };
    getData();
  }, []);

  let viewDetails = async (id) => {
    let result = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProductDetails(await result.json());
    setShowPopup(true);
  };

  const getProductsBasedOnCategory = async (value) => {
    let result = await fetch(
      `https://fakestoreapi.com/products/category/${value}`
    );
    setdata(await result.json());
  };

  const sortProducts = async (value) => {
    let url =
      value === "asc"
        ? `https://fakestoreapi.com/products`
        : `https://fakestoreapi.com/products?sort=desc`;

    let result = await fetch(url);
    setdata(await result.json());
  };

  return (
    <div className="content">
      <select
        name="category"
        id=""
        onChange={(e) => getProductsBasedOnCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>

      <select
        name="category"
        id=""
        onChange={(e) => sortProducts(e.target.value)}
      >
        <option value="">Sorting options</option>
        <option value="desc">Desc</option>
        <option value="asc">ASC</option>
      </select>
      <ul>
        {data.map((item) => {
          return (
            <li>
              <div class="title"> {item.title} </div>
              <div class="description">
                <p class="description">{item.description}</p>
                <img src={item.image} alt="Alt Text goes here" />
              </div>
              <button onClick={() => viewDetails(item.id)}>View Product</button>
            </li>
          );
        })}
      </ul>
      {showPopup && (
        <div className="popup">
          <img
            src="https://w7.pngwing.com/pngs/1008/558/png-transparent-computer-icons-button-close-angle-rectangle-logo-thumbnail.png"
            alt=""
            onClick={() => setShowPopup(false)}
          />
          <div class="title"> {productDetails.title} </div>
          <div class="description">
            <p class="description">{productDetails.description}</p>
            <img src={productDetails.image} alt="Alt Text goes here" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;

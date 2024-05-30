import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://6642ed723c01a059ea20d1de.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {products.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h2>{element.user_id}</h2>
                  </div>
                
                  <div className="card-body">
                    <h3 className="card-title">{element.user_name}</h3>
                    <h5 className="card-title">{element.user_email}</h5>
                    <p className="card-text">{element.user_phoneno}</p>
                    <p className="card-text">{element.user_companyname}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
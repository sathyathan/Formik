import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    book_id: "",
    book_name: "",
    book_author: "",
    book_ISBN:"",
  });
  useEffect(()=>{
  fetchData();
},[]);
  
  const fetchData = async () => {
    await axios
      .get(`https://6642ed723c01a059ea20d1de.mockapi.io/api/products/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  
  const validationSchema = Yup.object().shape({

    book_id:Yup.string().required("id is required"),
    book_name:Yup.string().required("name is required"),
    book_author:Yup.string().required("author is required"),
    book_ISBN:Yup.string().required("ISBN is required"),
  
    })
    const formik=useFormik({
      initialValues:{
      book_id: "",
      book_name: "",
      book_author: "",
      book_ISBN: "",
     

    },
    
    validationSchema,
    onSubmit:async(values)=>{

      await axios
      .post(
        'https://6642ed723c01a059ea20d1de.mockapi.io/api/products/',
        values
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    alert("products updated successfully")
    navigate("/products");
  }
    }
    
    
    )
    return (
      <div className="m-5">
        <form onSubmit={formik.handleSubmit}>
          <p>
            <label>
              Book Id:
              <input
                type="text"
                name="book_id"
                value={formik.values.book_id}
                onChange={formik.handleChange}
              />
            </label>
          </p>
          <br />
          <br />
          <p>
            <label>
              Book Name:
              <input
                type="text"
                name="book_name"
                value={formik.values.book_name}
                onChange={formik.handleChange}
              />
            </label>
          </p>
  
          <br />
          <br />
          <p>
            <label>
             Book author :
              <input
                type="text"
                name="book_author"
                value={formik.values.book_author}
                onChange={formik.handleChange}
              />
            </label>
          </p>
  
          <br />
          <br />
          <p>
            <label>
              Book ISBN:
              <input
                type="text"
                name="book_ISBN"
                value={formik.values.book_ISBN}
                onChange={Formik.handleChange}
              />
            </label>
          </p>
  
          <br />
          <br />
    
        <p>
          <button className="btn btn-danger " type="submit">
            Update
          </button>
        </p>
      </form>
    </div>
  );
};

export default Edit;
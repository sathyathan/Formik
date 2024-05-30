import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    book_id: "",
    book_name: "",
    book_author: "",
    book_ISBN: "",
    
  });
  const validationSchema = Yup.object().shape({

  book_id:Yup.string().required("id is required"),
  book_name:Yup.string().required("name is required"),
  book_author:Yup.string().required("author is required"),
  book_ISBN:Yup.string().required("ISBN is required"),

  })
  const handleSubmit = async (values) => {
    
    await axios
      .post(
        'https://6642ed723c01a059ea20d1de.mockapi.io/api/products/',
        values
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/products");
  };
  const formik=useFormik({

    initialValues:{createData},
    validationSchema,
    onSubmit:handleSubmit,

  })
  
  
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
        <div className="text-danger">{formik.errors.book_id}</div>
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
        <div className="text-danger">{formik.errors.book_name}</div>
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
        <div className="text-danger">{formik.errors.book_author}</div>
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
        <div className="text-danger">{formik.errors.book_ISBN}</div>
        <br />
        
        <p>
          <button className="btn btn-danger " type="submit">
            Create
          </button>
        </p>
      </form>
    </div>
  );
};

export default Create;
import React, { useState, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { exportComponentAsJPEG } from "react-component-export-image";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Logo from "./duetLogo.png";
import FinalCard from "./FinalCard";

export default function CardForm({ finalCard }) {
  const [genCard, setGenCard] = useState({});


  const handleCreateID = (e) => {
    e.preventDefault();
    const name = e.target.fullName.value;
    setGenCard({
      name,
    });
    toast.success("ID Card generated successfully..!", {
      duration: 4000,
      position: "top-center",
      style: {
        padding: "15px",
      },
    });

    
  };

  const [nameError, setNameError] = useState("");

  const handleName = (e) => {
    const name = e.target.value;
    if (name === "") {
      setNameError("Name is required");
    } else if (name.length < 6) {
      setNameError("Name must be at least 6 characters long");
    } else {
      setNameError("");
    }
  };


  return (
    <div className="flex flex-col justify-center items-center gap-10 lg:gap-0 lg:pb-20">
      <div className="py-6 w-full">
        <div className="text-center flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="avatar">
            <div className="w-16 rounded">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            <Link to="/">Dhaka University of Engineering & Technology</Link>
          </h1>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg">Identification Card Generator</p>
        </div>
        <div className="mt-4 w-full">
          <form
            onSubmit={handleCreateID}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <div className="relative w-11/12 md:w-10/12 max-w-4xl md:shadow-md rounded-2xl md:p-6">
              <h3 className="font-semibold text-xl flex justify-center items-center mx-auto badge p-4">
                Input Your Information
              </h3>

              
              <div className="name border rounded p-3 relative mt-10">
                <div className="name-title absolute -top-4 bg-base-100 border rounded p-1">
                  <h3 className="text-xs font-poppins">Put your full name</h3>
                </div>
                <div
                  className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${
                    nameError && "border-error shadow-error outline-error"
                  }`}
                >
                  <div className="icon">
                    <i className="bx bxs-pen"></i>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleName}
                    className="form-control outline-none pl-4 w-full bg-transparent"
                    placeholder="Full Name"
                    required
                  />
                </div>
                {nameError && (
                  <small className="flex flex-col pt-2 text-error">
                    {nameError}
                  </small>
                )}
              </div>

              <div className="modal-action">
                <button
                  className={`btn flex gap-2 ${
                    nameError 
                      ? "btn-disabled"
                      : ""
                  }`}
                  type="submit"
                >
                  <i className="bx bx-id-card text-lg"></i> Generate ID Card
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:pt-20">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-xl font-semibold badge p-4">
            Certificate
          </h1>

          {genCard && <FinalCard finalCard={finalCard} genCard={genCard} />}
        </div>

        
          <div className="py-12 md:py-0 md:pb-12 lg:py-0 flex flex-col md:flex-row justify-center gap-3 md:gap-5">
            <ReactToPrint
              trigger={() => (
                <button className="btn flex gap-2">
                  <i className="bx bx-printer text-lg"></i>Export As PDF
                </button>
              )}
              content={() => finalCard.current}
            />
            <button
              className="btn flex gap-2"
              onClick={() => exportComponentAsJPEG(finalCard)}
            >
              <i className="bx bx-image text-lg"></i>
              Export As JPG
            </button>
          </div>
      </div>
    </div>
  );
}

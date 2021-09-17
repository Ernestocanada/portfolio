import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const ContactForm = () => {
  const [status, setStatus] = useState("Send Email");
  const cancelCourse = () => {
    document.getElementById("create-course-form").reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  //////////////////////////////////////////////////////
  const onSubmit = async (d) => {
    setStatus("Sending...");
    let response = await fetch(
      "https://intense-plateau-64770.herokuapp.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(d),
      }
    );

    setStatus("Send Email");
    let result = await response.json();
    alert(result.status);
    cancelCourse();
  };

  /* const onSubmit = async (e) => {
      e.preventDefault(); 
    setStatus("Sending...");
     const { name, email, message } = e.target.elements; 

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Send Email");
    let result = await response.json();
    alert(result.status);
  }; */

  //////////////////////////////////////////////
  return (
    <ContactFormStyled>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
        id="create-course-form"
      >
        <div className="contact-title">
          <h4>Get In Touch</h4>
        </div>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 25 })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>Name is required.</p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p>Name is too long</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Email is not valid.</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            name="textarea"
            id="message"
            cols="30"
            rows="5"
            {...register("message", { required: true, maxLength: 300 })}
          />
          {errors.message && errors.message.type === "required" && (
            <p>Message is required.</p>
          )}
          {errors.message && errors.message.type === "maxLength" && (
            <p>Your message is too long. Please shorten it before sending </p>
          )}
        </div>
        <div className="form-field  ">
          <button className="button" type="submit">
            <PrimaryButton title={status} />
          </button>
        </div>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;

const ContactFormStyled = styled.div`
  display: flex;
  .contact-title {
    h4 {
      color: var(--white-color);
      padding: 0.5rem 0;
      font-size: 1.8rem;
    }
  }
  .form-field {
    margin-top: 2rem;
    width: 100%;

    p {
      color: red;
    }
  }

  label {
    background-color: var(--background-dark-color);
  }

  input {
    border: 1px solid var(--border-color);

    background: transparent;
    height: 50px;
    padding: 0.7rem 15px;
    width: 100%;
    color: var(--white-color);
  }

  textarea {
    padding: 5px;
    background: transparent;
    width: 100%;
    color: var(--white-color);
    border: 1px solid var(--border-color);
  }
  button {
    all: unset;
    margin-left: 20px;
    margin-top: 6px;
    margin-bottom: 20px;
  }
`;

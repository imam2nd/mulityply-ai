import React from "react";
import * as style from "@/styles/contactform.module.css";
import curvedArrow from "@/images/curved-arrow-left.svg";

const formSelectOptions = [
  {
    label:
      "I would like to find out more about Multiply’s White label solution",
    value: "1",
  },
  {
    label:
      "I am interested in Multiply’s Adviser Hub / Advice & Compliance Engine solutions",
    value: "2",
  },
  {
    label: "I am interested in Multiply’s Revenue profiler",
    value: "3",
  },
  {
    label: "I am a consultant interested in Multiply for my client",
    value: "4",
  },
  {
    label: "I am a software provider and would like to partner with Multiply",
    value: "5",
  },
  {
    label: "I am interested in all of the above",
    value: "6",
  },
  {
    label: "Other reason",
    value: "8",
  },
];

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <section
      className={style.contactWrapper}
      id="book-a-demo"
      aria-label="booking a demo"
    >
      <div className={style.contact}>
        <div className={style.heading}>
          <img
            src={curvedArrow}
            alt="curved arrow"
            loading="lazy"
            className={style.curvedArrow}
          />
          <h1 className={style.title}>
            Book a demo to find out more about Multiply
          </h1>
          <p className={style.desc}>
            Complete this form and a member of the Multiply team will be in
            touch.
          </p>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formLayout}>
            <div className={style.fieldWrapper}>
              <label htmlFor="book_demo_fullName" className={style.fieldLabel}>
                Full name*
              </label>
              <input
                id="book_demo_fullName"
                type="text"
                name="fullName"
                required
                className={style.fieldInput}
              />
            </div>
            <div className={style.fieldWrapper}>
              <label htmlFor="book_demo_email" className={style.fieldLabel}>
                Email*
              </label>
              <input
                id="book_demo_email"
                type="text"
                name="email"
                required
                className={style.fieldInput}
              />
            </div>
            <div className={style.fieldWrapper}>
              <label htmlFor="book_demo_company" className={style.fieldLabel}>
                Company*
              </label>
              <input
                id="book_demo_company"
                type="text"
                name="company"
                required
                className={style.fieldInput}
              />
            </div>
            <div className={style.fieldWrapper}>
              <label htmlFor="book_demo_todo" className={style.fieldLabel}>
                What can we do for you?
              </label>
              <select
                id="book_demo_todo"
                name="todo"
                className={`${style.fieldInput} ${style.fieldSelect}`}
                defaultValue=""
              >
                <option value="" disabled>
                  Please Select
                </option>
                {formSelectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={style.fieldWrapper}>
            <label htmlFor="book_demo_message" className={style.fieldLabel}>
              Optional message
            </label>
            <textarea
              id="book_demo_message"
              name="message"
              className={`${style.fieldInput} ${style.fieldTextArea}`}
            ></textarea>
          </div>
          <button className={style.submitBtn}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

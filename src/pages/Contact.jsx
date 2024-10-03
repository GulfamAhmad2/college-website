import React from "react";
import { useForm } from "react-hook-form";
import Section from "../components/Section";
import InputField from "../components/inputFeild";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const inputFields = [
    { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
    { label: 'Message', type: 'textarea', name: 'message', placeholder: 'Enter your message' },
  ];

  return (
    <Section>

    <section className="flex flex-col lg:flex-row justify-between items-center py-12 bg-gradient-to-br from-color-1 to-color-2 ">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 px-8">
    <h2 className="text-5xl font-bold text-white mb-8">Get In Touch</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-lg p-8"
        >
        {inputFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              register={register}
              errors={errors}
            />
          ))}
          <button
            type="submit"
            className="w-full bg-color-1 text-white p-4 rounded-lg hover:bg-color-1/90 transition duration-300"
          >
            Submit
          </button>
          </form>
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-8 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.7194925553432!2d72.95018687935944!3d19.207093279410234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b900d0000001%3A0xc566cbb84c4ef059!2sGyanodaya%20B.Ed%20%26%20D.Ed%20College!5e1!3m2!1sen!2sin!4v1727949120642!5m2!1sen!2sin"
          width="500"
          height="500"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    </Section>
  );
};

export default Contact;

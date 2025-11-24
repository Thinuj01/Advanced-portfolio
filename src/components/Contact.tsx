"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSchema = Yup.object({
  name: Yup.string().min(2, "Name is required").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sendEmail = async (values: { name: string; email: string; message: string }, resetForm: () => void) => {
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      resetForm();
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-linear-to-r from-gray-400 to-gray-50 dark:from-black dark:to-red-900 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white/20 dark:bg-black/30 backdrop-blur-xl shadow-xl border border-gray-300 dark:border-gray-700 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Contact Me
        </h2>

        {success && (
          <p className="mb-4 text-center text-green-600 dark:text-green-400 font-semibold">
            Message sent successfully!
          </p>
        )}

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => sendEmail(values, resetForm)}
        >
          {() => (
            <Form className="flex flex-col gap-5">
              {/* Name */}
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                <label className="block mb-1 text-gray-800 dark:text-gray-200">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-red-600"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                <label className="block mb-1 text-gray-800 dark:text-gray-200">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-red-600"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
                <label className="block mb-1 text-gray-800 dark:text-gray-200">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-red-600"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-lg bg-gray-700 hover:bg-gray-600 dark:bg-red-800 dark:hover:bg-red-700 text-white font-semibold transition flex items-center justify-center"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </section>
  );
}

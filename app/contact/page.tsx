"use client";

import { useState } from "react";
import { Metadata } from "next";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 py-20 mb-12">
        <div className="container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="feedback">Feedback</option>
                    <option value="advertising">Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </span>
                  <FiSend />
                </button>

                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-fade-in">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg animate-fade-in">
                    Failed to send message. Please try again or email us
                    directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      Address
                    </h4>
                    <p className="text-neutral-600">
                      123 Galle Road
                      <br />
                      Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      Email
                    </h4>
                    <p className="text-neutral-600">
                      ravinduwjerathne@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      Phone
                    </h4>
                    <p className="text-neutral-600">+94 70 442 4075</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Social Media */}
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-display font-bold mb-4">
                Follow Us
              </h3>
              <p className="text-white/90 mb-6">
                Stay connected and get the latest updates on social media
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                Response Time
              </h3>
              <p className="text-neutral-600">
                We typically respond to all inquiries within 24-48 hours during
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

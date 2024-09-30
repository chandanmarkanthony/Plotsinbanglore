import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://leadapi.homebble.in/formdataRoute/sendMailPlots', formData);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Enquiry submitted successfully!',
      });
      const newUrl = `${window.location.pathname}?FormSucess=true`;
      window.history.replaceState({}, '', newUrl);

      setFormData({ name: '', email: '', phone: '' });
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to submit enquiry. Please try again.',
      });
    }
  };

  const handleOverlayClick = (e) => {
    // Close the modal if the user clicks outside the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen ? (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-2" onClick={handleOverlayClick}>
        <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-[24rem] relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-2xl">
            &times;
          </button>
          <h2 className="text-2xl font-semibold text-center mb-6">Enquiry Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 tracking-wide" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg placeholder-gray-500 text-gray-700"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 tracking-wide" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg placeholder-gray-500 text-gray-700"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 tracking-wide" htmlFor="number">Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg placeholder-gray-500 text-gray-700"
                placeholder="Enter Your Number"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 w-full text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default Modal;

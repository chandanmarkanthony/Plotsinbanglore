import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

// Modal component
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
        text:'Enquiry submitted successfully!'});
        setFormData({ name: '',
          email: '',
          phone: '',})
      onSubmit(); 
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'error',
        text:"Failed to submit enquiry. Please try again."});
    }
  };

  return (
    isOpen ? (
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
            &times;
          </button>
          <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
          
            <div className="flex justify-end gap-3">
            <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2  rounded hover:bg-red-600" onClick={onSubmit}
              >
                close
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
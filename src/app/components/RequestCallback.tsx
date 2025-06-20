"use client";
import React, { useRef, useState, useEffect } from 'react';

const RequestCallback: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsSubmitted(false); // reset message if modal is reopened
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000); // auto-close after 3 seconds
  };

  return (
    <div className="relative">
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className="btnLeft mt-9 w-full"
      >
        Request a Callback
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div
            ref={modalRef}
            className="bg-white p-9 rounded-xl w-full max-w-sm shadow-lg relative"
          >
            {isSubmitted ? (
              <div className="text-center text-green-600 text-lg font-medium">
                Thanks for taking interest in our services. <br />
                We'll call you shortly.
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center">Request a Callback</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-md font-medium text-gray-700">Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="inputBox w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-700">Email:</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="inputBox w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-700">Phone:</label>
                    <input
                      type="tel"
                      placeholder="Phone with country code."
                      required
                      className="inputBox w-full"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btnLeft"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestCallback;

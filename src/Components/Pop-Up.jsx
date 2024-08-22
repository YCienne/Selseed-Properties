// src/components/PopUp.js
import React from 'react';

const PopUp = ({ isVisible, onClose }) => {
    return (
        <>
            {isVisible && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-2">Contact Information</h2>
                        <p>Email: example@example.com</p>
                        <p>Phone: +123 456 7890</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUp;

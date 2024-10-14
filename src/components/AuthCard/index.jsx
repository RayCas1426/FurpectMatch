import React, { useState } from 'react';

const AuthCard = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Login / Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded p-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded p-2" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white rounded py-2">Login</button>
                </form>
                <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
            </div>
        </div>
    );
};

export default AuthCard;

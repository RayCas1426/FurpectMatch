import React, { useState } from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const CreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate inputs
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one uppercase letter.');
            return;
        }

        // Save user data in localStorage
        const userData = { name, email, password };
        localStorage.setItem(email, JSON.stringify(userData));
        alert('Account created successfully! You can now log in.');
    };

    return (
        <div>
           
            <section style={{ backgroundColor: '#F9FAFB' }}>
                <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:py-16 lg:py-0">
                    <div className="w-full" style={{ maxWidth: '600px', backgroundColor: '#FFFFFF', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB' }}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight" style={{ color: '#111827' }}>Create an account</h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                {error && <div className="text-red-500">{error}</div>}
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium" style={{ color: '#111827' }}>Your name</label>
                                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium" style={{ color: '#111827' }}>Your email</label>
                                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium" style={{ color: '#111827' }}>Password</label>
                                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="••••••••" required />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium" style={{ color: '#111827' }}>Confirm Password</label>
                                    <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="••••••••" required />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                                    style={{ backgroundColor: '#675BC8', transition: 'background-color 0.2s' }} 
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563EB'} 
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#675BC8'}
                                >
                                    Sign up
                                </button>
                                <p className="text-sm font-light" style={{ color: '#6B7280' }}>
                                    Already have an account? <a href="/LoginAccount" className="font-medium" style={{ color: '#675BC8' }}>Sign in</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CreateAccount;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Footer from "../../components/Footer";

const LoginAccount = ({ setIsLoggedIn }) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

       
        const userData = JSON.parse(localStorage.getItem(email));
        if (!userData) {
            setError('User not found.');
            return;
        }
        if (userData.password !== password) {
            setError('Incorrect password.');
            return;
        }

        
        alert('Login successful!');
        setIsLoggedIn(true);
        navigate('/UserOverview'); 
    };

    return (
        <div>
            <section style={{ backgroundColor: '#F9FAFB' }}>
                <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:py-16 lg:py-0">
                    <div className="w-full" style={{ maxWidth: '600px', backgroundColor: '#FFFFFF', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB' }}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight" style={{ color: '#111827' }}>Sign in to your account</h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                {error && <div className="text-red-500">{error}</div>}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium" style={{ color: '#111827' }}>Your email</label>
                                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium" style={{ color: '#111827' }}>Password</label>
                                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="••••••••" required />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                                    style={{ backgroundColor: '#675BC8', transition: 'background-color 0.2s' }} 
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563EB'} 
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#675BC8'}
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light" style={{ color: '#6B7280' }}>
                                    Don’t have an account yet? <a href="/CreateAccount" className="font-medium" style={{ color: '#675BC8' }}>Sign up</a>
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

export default LoginAccount;

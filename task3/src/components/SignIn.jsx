import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const SignIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onLogin(username);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div
        ref={ref}
        className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-2xl w-96"
      >
        <FaUser className="text-4xl text-cyan-400 mx-auto mb-4" />

        <h2 className="text-2xl font-bold text-center mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-cyan-500 outline-none mb-6"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:scale-105 transition duration-300"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

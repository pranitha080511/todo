import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaRocket } from "react-icons/fa";

const Landing = ({ onStart }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div ref={ref} className="text-center">
        <FaRocket className="text-6xl text-cyan-400 mx-auto mb-6" />

        <h1 className="text-5xl font-bold mb-4">
          Smart Todo App
        </h1>

        <p className="text-gray-400 mb-8">
          Organize your life. Stay productive.
        </p>

        <button
          onClick={onStart}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:scale-110 transition duration-300 shadow-xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;

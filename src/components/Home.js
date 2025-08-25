import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/add");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center px-6 py-12">
      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-3xl w-full text-right">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
          ברוכים הבאים לטאלנט שואוקייס! 🎉
        </h1>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          זהו המקום בו תוכלו להציג את הכישרון שלכם, לגלות אנשים מוכשרים נוספים
          ולהתחבר לקהילה יוצרת.
        </p>

        <ul className="space-y-3 text-gray-800 font-medium pr-6 list-disc">
          <li className="hover:text-purple-600 transition">
            העלו פרויקטים ותוצרים אישיים
          </li>
          <li className="hover:text-pink-600 transition">
            צפו בעבודות של אחרים וקבלו השראה
          </li>
          <li className="hover:text-blue-600 transition">
            הצטרפו לדיונים ושתפו רעיונות
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-700">
          התחילו עכשיו והפכו לחלק מהקהילה שלנו! 🚀
        </p>

        <div className="mt-8 flex justify-center md:justify-end">
          <button
            onClick={handleJoinClick}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-xl shadow-lg transition"
          >
            ✨ הצטרפו עכשיו
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

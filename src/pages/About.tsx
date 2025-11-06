import { Link } from "react-router";


const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📚 About the Library Management System
        </h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          The <span className="font-semibold text-indigo-600">Minimal Library Management System</span> 
          is a simple, clean, and fully client-side web application built with{" "}
          <span className="font-medium">React, Redux Toolkit Query (RTK Query), and TypeScript</span>.
          <br />
          It allows users to view, add, edit, delete, and borrow books — all 
          without authentication or extra complexity.
        </p>

        <div className="bg-white rounded-lg shadow p-6 text-left mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🎯 Project Goals</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Demonstrate proper state management using RTK Query.</li>
            <li>Build a functional CRUD system with clear UI/UX.</li>
            <li>Practice TypeScript typing and component modularity.</li>
            <li>Use a minimalist and responsive design with Tailwind CSS.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-left mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛠️ Technologies Used</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
            <li>⚛️ React</li>
            <li>🧰 Redux Toolkit</li>
            <li>💬 RTK Query</li>
            <li>🎨 Tailwind CSS</li>
            <li>📝 TypeScript</li>
            <li>⚡ Vite</li>
          </ul>
        </div>

        <p className="text-gray-600 mt-6">
          Designed and developed as a learning project to explore modern 
          frontend architecture and efficient state management.
        </p>

        <div className="mt-8">
          <Link
            to="/booksPage"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            📘 Browse Books
          </Link>
        </div>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Minimal Library Management System. All rights reserved.
      </footer>
    </div>
    );
};

export default About;
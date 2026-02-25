// frontend/src/App.jsx
function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 font-sans">
      <div className="text-center space-y-4 p-8 bg-white rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
          MERN Boilerplate
        </h1>
        <p className="text-lg text-slate-500">
          Vite + React + Tailwind CSS + Express
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Frontend Ready</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Backend Ready</span>
        </div>
      </div>
    </div>
  );
}

export default App;
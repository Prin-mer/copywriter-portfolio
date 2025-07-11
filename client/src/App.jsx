function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="text-center p-6 space-y-6 max-w-xl">
        <h1 className="text-4xl font-bold">John Doe – Copywriter</h1>
        <p className="text-lg">
          I craft words that connect, convert, and compel. Explore my work and see how I can bring life to your brand’s message.
        </p>
        <div className="space-x-4">
          <a
            href="https://github.com/Prin-mer"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg"
          >
            GitHub
          </a>
          <a
            href="#"
            className="inline-block bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

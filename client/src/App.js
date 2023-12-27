import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4">
      <img
        src="https://docs.xclone.xyz/xlogo.png"
        className="w-12 h-12 rounded mb-3"
        alt=""
      />
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"
        style={{
          backgroundColor: "#15202B",
        }}
      ></div>
      <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">
        Coming Soon
      </h1>
      <p className="text-white text-xl md:text-2xl">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
}

export default App;

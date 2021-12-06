function App() {
  return (
    <div className="App w-11/12 m-auto">
      <div className="text-2xl font-semibold text-center my-5">Flexshop</div>
      <div className="w-full flex align-baseline">
        <input className="border border-r-0 rounded-l-lg w-10/12 h-14 px-4" placeholder="Search..."></input>
        <button className="bg-white border rounded-r-lg py-3 px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;

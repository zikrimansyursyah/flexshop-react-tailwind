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
      <h1 className="my-5 text-4xl font-semibold leading-normal">Find Anything You Want Here!</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-headline1 bg-cover bg-center"></div>
        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-gray-600">
            You can control which variants are generated for the grid-auto-rows utilities by modifying the gridAutoRows
          </h2>
          <img
            src="https://images.unsplash.com/photo-1516810714657-e654b97f1d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            height="20%"
          ></img>
        </div>
      </div>
      <div className="flex justify-between items-center my-6">
        <h4 className="text-gray-500 text-md">Don't let yourself cold</h4>
        <button className="px-5 py-5 border rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1581327512014-619407b6a116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=614&q=80"></img>
    </div>
  );
}

export default App;

const Vesting = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 max-w-5xl m-auto w-full">
      <main className="p-6 w-full">
        <h2 className="text-center">
          <span className="text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
            Vesting schedule
          </span>
        </h2>

        <div className="card bg-base-100 shadow-xl mt-10 max-w-2xl m-auto">
          <div className="card-body">
            <p className="text-2xl m-0">Begin by setting up your vesting schedule.</p>
            <p className="text-xl my-4">
              This grants you complete DAO access, empowering you to create your own proposals or vote on others&apos;.
              Each interaction reduces your vesting cliff time.
            </p>
            <div className="card-actions w-full flex">
              <button className="bg-purple-600 mt-5 flex-1 text-white px-4 py-2 rounded hover:bg-purple-700 text-center">
                Create vesting schedule
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vesting;
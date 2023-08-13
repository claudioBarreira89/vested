import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 max-w-5xl m-auto">
      <main className="p-6">
        <section className="mb-16">
          <div className="flex flex-col">
            <h1>
              <span className="text-8xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
                VESTED
              </span>
            </h1>
            <div className="text-4xl my-4">
              <ul className="flex flex-col gap-2">
                <li>⚡️ Mint our exclusive NFT to join our DAO</li>
                <li>⚡️ Create a vesting schedule</li>
                <li>⚡️ Interact with the community and release your tokens sooner!</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex  gap-4">
          <div className="mb-8 flex-1 border-2 p-6 rounded-lg  shadow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-600">Mint Your NFT</h2>
              <p className="mb-4">
                Mint our DAO&apos;s NFT to access VESTED features and engage in proposals and voting.
              </p>
            </div>
            <Link href="/mint" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-center">
              Mint NFT
            </Link>
          </div>

          <div className="mb-8 flex-1 border-2  p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-600">Create Vesting Schedule</h2>
              <p className="mb-4">
                With the NFT, create a vesting schedule with the DAO&apos;s tokens to enhance your access
              </p>
            </div>
            <Link
              href="/vesting"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-center"
            >
              Create Vesting Schedule
            </Link>
          </div>

          <div className="mb-8 flex-1 border-2 p-6 rounded-lg  shadow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-purple-600">Interact with DAO</h2>
              <p className="mb-4">
                Engage, propose, and vote within the DAO. Each interaction reduces your vesting cliff time.
              </p>
            </div>
            <Link
              href="/proposals"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-center"
            >
              Check proposals
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

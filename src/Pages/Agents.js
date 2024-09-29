import React from 'react'

export default function Agents() {
  return (
    <>
 <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Manage AI Agents</h1>
        <p className="text-center text-lg mb-12">
          Here you can deploy, monitor, and manage AI agents for various tasks.
        </p>

        <div className="agents grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example AI agent card */}
          <div className="agent-card bg-white shadow-lg rounded-lg p-6 border border-gray-300">
            <h3 className="text-2xl font-semibold mb-4">DeFi Market Predictor</h3>
            <p className="text-gray-700 mb-4">
              Predict future market trends using historical blockchain data.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Deploy
            </button>
          </div>

          <div className="agent-card bg-white shadow-lg rounded-lg p-6 border border-gray-300">
            <h3 className="text-2xl font-semibold mb-4">Energy Usage Optimizer</h3>
            <p className="text-gray-700 mb-4">
              Analyze and optimize energy consumption for smart grids.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Deploy
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

import React from 'react'

export default function AgentCard({agent}) {
  return (
    <div>
        <div className="border border-gray-300 p-6 rounded-lg text-center">
      <h3 className="text-lg mb-2">{agent.name}</h3>
      <p className="text-gray-600">{agent.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
        Deploy
      </button>
    </div>
    </div>
  )
}

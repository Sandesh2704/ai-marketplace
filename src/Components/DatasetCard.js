import React from 'react'

export default function DatasetCard({dataset}) {
  return (
    <>
          <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{dataset.name}</h3>
      <p className="text-gray-600 mb-4">{dataset.description}</p>
      <p className="font-bold text-lg mb-4">
        <strong>Price:</strong> {dataset.price}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Buy Dataset
      </button>
    </div>
    </>
  )
}

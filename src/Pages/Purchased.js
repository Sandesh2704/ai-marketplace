import React from 'react'
import { Link } from 'react-router-dom';

export default function Purchased() {
  const purchasedDatasets = [
    { id: 1, name: "Energy Usage Data", description: "Energy consumption data for smart grids", accessLink: "https://ipfs.io/..." },
    { id: 2, name: "DeFi Transaction Data", description: "Historical DeFi transaction data", accessLink: "https://ipfs.io/..." },
  ];

  return (
    <div>
      <main className="container mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-6">Purchased Datasets</h1>
        <p className="text-center text-lg mb-12">Access the datasets you've purchased.</p>

        <ul className="space-y-8">
          {purchasedDatasets.map((dataset) => (
            <li key={dataset.id} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">{dataset.name}</h3>
              <p className="text-gray-700 mb-4">{dataset.description}</p>
              <Link
                to={dataset.accessLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Access Dataset
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

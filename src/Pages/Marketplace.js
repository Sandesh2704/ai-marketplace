import React from 'react'
import DatasetCard from '../Components/DatasetCard'

export default function Marketplace() {

    const datasets = [
        { id: 1, name: "DeFi Market Data", description: "Blockchain data for DeFi analysis", price: "0.5 ETH" },
        { id: 2, name: "Traffic Data", description: "Real-time traffic data for transportation models", price: "0.3 ETH" },
      ];
    

  return (
    <div>
          <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Dataset Marketplace</h1>
        <p className="text-center text-lg mb-12">Browse and purchase datasets for AI and ML tasks.</p>

        <div className="marketplace grid grid-cols-1 md:grid-cols-2 gap-8">
          {datasets.map((dataset) => (
            <DatasetCard key={dataset.id} dataset={dataset} />
          ))}
        </div>
      </main>
    </div>
  )
}

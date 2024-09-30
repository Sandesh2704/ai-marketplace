import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import DatasetCard from './Components/DatasetCard';

export default function App() {

  const purchasedDatasets = [
    { id: 1, name: "Energy Usage Data", description: "Energy consumption data for smart grids", accessLink: "https://ipfs.io/..." },
    { id: 2, name: "DeFi Transaction Data", description: "Historical DeFi transaction data", accessLink: "https://ipfs.io/..." },
  ];


  const listsets = [
    { id: 1, name: "DeFi Market Data", description: "Blockchain data for DeFi analysis", price: "0.5 ETH" },
    { id: 2, name: "Traffic Data", description: "Real-time traffic data for transportation models", price: "0.3 ETH" },
  ];

  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file) {
      // Logic to upload dataset to IPFS or other decentralized storage
      console.log("Uploading file:", file);
    } else {
      console.log("No file selected");
    }
  };


  return (
    <>
<NavBar/>

        <div className='px-4 md:px-7 xl:px-[150px] py-10'>

      <main className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Welcome to the AI & ML Platform</h1>
                <p className="text-center text-lg mb-12">Deploy AI agents or buy and sell datasets in a decentralized marketplace.</p>
            </main>



  
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-6">Upload Dataset</h1>
        <p className="text-center text-lg mb-12">Upload a dataset to sell it in the marketplace.</p>

        <div className="flex flex-col items-center">
          <input 
            type="file" 
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4 px-4 py-2 border border-gray-300 rounded-md"
          />
          <button 
            onClick={handleUpload}
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
          >
            Upload
          </button>
        </div>
      </main>



      <div>
          <main className="container mx-auto py-20">
            <h1 className="text-4xl font-bold text-center mb-6">Dataset Marketplace</h1>
            <p className="text-center text-lg mb-12">Browse and purchase datasets for AI and ML tasks.</p>
            <div className="marketplace grid grid-cols-1 md:grid-cols-2 gap-8">
              {listsets.map((dataset) => (
                <DatasetCard key={dataset.id} dataset={dataset} />
              ))}
            </div>
          </main>
        </div>




      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-6">Purchased Datasets</h1>
        <p className="text-center text-lg mb-12">Access the datasets you've purchased.</p>

        <ul className="space-y-8">
          {purchasedDatasets.map((dataset) => (
            <li key={dataset.id} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-2">{dataset.name}</h3>
              <p className="text-gray-700 mb-4">{dataset.description}</p>
              <a
                href={dataset.accessLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Access Dataset
              </a>
            </li>
          ))}
        </ul>
      </main>




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

      </div>

      <Footer/>
    </>
  )
}

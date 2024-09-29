import React, { useState } from 'react'

export default function Upload() {
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
       <main className="container mx-auto">
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
    </>
  )
}

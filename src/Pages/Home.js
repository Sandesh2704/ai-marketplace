import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <main className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Welcome to the AI & ML Platform</h1>
                <p className="text-center text-lg mb-12">Deploy AI agents or buy and sell datasets in a decentralized marketplace.</p>

                <div className="dashboard-links grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link to="/agents" className="card bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-4">Manage AI Agents &rarr;</h3>
                        <p>Deploy, manage, and view AI models and agents for different tasks.</p>
                    </Link>
                    <Link to="/marketplace" className="card bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-4">Marketplace &rarr;</h3>
                        <p>Buy and sell AI datasets on the decentralized marketplace.</p>
                    </Link>
                    <Link to="/upload" className="card bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-4">Upload Dataset &rarr;</h3>
                        <p>Upload your datasets and monetize them by listing them for sale.</p>
                    </Link>
                    <Link to="/purchased" className="card bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold mb-4">Purchased Datasets &rarr;</h3>
                        <p>View and access the datasets you have purchased.</p>
                    </Link>
                </div>
            </main>
        </>
    )
}

import React, { useEffect, useState, useCallback } from 'react';
import { Octokit } from '@octokit/rest'; // Import Octokit

const octokit = new Octokit(); // Create an instance of Octokit

const GoodFirstIssues = () => {
    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchIssues = useCallback(async (pageNumber) => {
        setLoading(true);
        try {
            const response = await octokit.rest.search.issuesAndPullRequests({
                q: 'label:"good first issue" is:open',
                per_page: 15,
                page: pageNumber,
            });
            setIssues(response.data.items);
            setTotalPages(Math.ceil(response.data.total_count / 15)); // Calculate total pages
        } catch (error) {
            console.error("Error fetching issues:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchIssues(page);
    }, [fetchIssues, page]);

    return (
        <div className="container mx-auto p-6 pt-10 pb-10">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Good First Issues</h1>
            {loading ? (
                <p className="text-center text-lg text-gray-600">Loading...</p>
            ) : (
                <table className="w-full text-center">
                    <thead>
                        <tr>
                            <th className="text-left p-4">Title</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue) => (
                            <tr key={issue.id} className="border-b border-gray-200">
                                <td className="p-4">{issue.title}</td>
                                <td className="p-4">{issue.body ? issue.body.substring(0, 100) + '...' : 'No description available.'}</td>
                                <td className="p-4">
                                    <a href={issue.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                                        View Issue
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="flex justify-center items-center mt-6 px-4 space-x-4">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 disabled:opacity-50">
                    Previous
                </button>
                <span className="text-lg">Page {page} of {totalPages}</span>
                <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 disabled:opacity-50">
                    Next
                </button>
            </div>
        </div>
    );
};
export default GoodFirstIssues; 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [collegeNames, setCollegeNames] = useState([]);
    const [college, setCollege] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch college names from the database
        fetch('https://campus-connect-server-toushik018.vercel.app/colleges')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCollege(data)
                setCollegeNames(data.map((college) => college.collegeName));
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching college names:', error);
                setLoading(false);
            });
    }, []);

    console.log(college);

    if (loading) {
        // Show loading spinner while data is being fetched
        return <div className="mx-auto loading loading-spinner loading-lg"></div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">College Names</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">College Name</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collegeNames.map((collegeName) => (
                            <tr key={collegeName}>

                                <td className="border px-4 py-2">{collegeName}</td>
                                <td className="border px-4 py-2">

                                    <Link to={`/admissionSubmit/${collegeName.replace(/\s+/g, '-').toLowerCase()}`}>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => {
                                                // Handle the 'Go' button click here (e.g., navigate to the details page)
                                                console.log(`Go to details page for ${collegeName}`);
                                            }}
                                        >
                                            Go
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;

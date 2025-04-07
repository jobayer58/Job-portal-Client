import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const { _id,title, company } = job
    return (
        <div className='mt-10'>
            <h2 className='text-3xl'>job Details for {title}</h2>
            <p>Apply for : {company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary">Apply now</button>
            </Link>
        </div>
    );
};

export default JobDetails;
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
    const { title, company, location, company_logo, description, requirements, salaryRange,_id } = job
    return (
        <div>
            <div className="card bg-base-100 h-90  shadow-sm">
                <div className='flex gap-2 m-2'>
                    <figure>
                        <img className='w-16'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h4 className="text-2xl">{company}</h4>
                        <p className='flex items-center gap-1'><FaMapMarkerAlt></FaMapMarkerAlt>{location} </p>
                    </div>
                </div>
                <div className="card-body ">
                    <h2 className="card-title">{title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className='flex gap-2 flex-wrap'>
                        {
                            requirements.map((skill,index) => <p key={index} className='border rounded-md text-center hover:text-white  hover:bg-blue-500'>{skill}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end items-center mt-4">

                        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobs/${_id}`}>
                            <button className="btn btn-primary">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;
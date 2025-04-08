import React from 'react';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h2 className='text-3xl'>Post A New job</h2>
            <form onSubmit={handleAddJob}>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* job title */}
                        <label className="fieldset-label">Job Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Job Title" />
                        {/* job location */}
                        <label className="fieldset-label">Job Location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Job Location" />
                        {/* job type*/}
                        <label className="fieldset-label">Job Type</label>
                        <select className="select w-full">
                            <option disabled selected>Pick a Job Type</option>
                            <option>Full-Time</option>
                            <option>Intern</option>
                            <option>Part-Time</option>
                        </select>
                        {/* job type*/}
                        <label className="fieldset-label">Job Field</label>
                        <select className="select w-full">
                            <option disabled selected>Pick a Job Field</option>
                            <option>Engineering</option>
                            <option>Finance</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                        {/* salary Range */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                            <div>
                                <label className="fieldset-label">Salary Range</label>
                                <input type="text" name='min' className="input w-full" placeholder="Min" />
                            </div>
                            <div>
                                <input type="text" name='max' className="input w-full" placeholder="Max" />
                            </div>
                            <div>
                                <select className="select w-full">
                                    <option disabled selected>Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </select>
                            </div>
                        </div>
                        {/* job description */}
                        <label className="fieldset-label">Job Description</label>
                        <textarea className="textarea w-full" name='description' required placeholder="Job Description"></textarea>
                        {/* Company name */}
                        <label className="fieldset-label">Company name</label>
                        <input type="text" name='company' className="input w-full" placeholder="Company name" required />
                        {/* Job requirements */}
                        <label className="fieldset-label">Job requirements</label>
                        <textarea className="textarea w-full" name='requirements' required placeholder="put each requirements in a new line"></textarea>
                        {/* Job Responsibilities */}
                        <label className="fieldset-label">Job Responsibilities</label>
                        <textarea className="textarea w-full" name='responsibilities' required placeholder="Write each Responsibilities in a new line"></textarea>
                        {/* HR name */}
                        <label className="fieldset-label">HR name</label>
                        <input type="text" name='hr_name' className="input w-full" placeholder="HR name" required />
                        {/* HR Email */}
                        <label className="fieldset-label">HR Email</label>
                        <input type="text" name='hr_email' className="input w-full" placeholder="HR Email" required />
                        {/* Company Logo URL */}
                        <label className="fieldset-label">Company Logo URL</label>
                        <input type="text" name='company_logo' className="input w-full" placeholder="Company Logo URL" required />
                        {/* submit btn*/}
                        <button className="btn btn-neutral mt-4">Submit</button>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
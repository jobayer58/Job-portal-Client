import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    // console.log(id,user);

    const submitJobApplication = e => {
        e.preventDefault()
        const form = e.target
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value
        console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }
        fetch('http://https://job-portal-server-henna.vercel.app:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })

    }
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Apply job and Good Luck!</h1>
                <form onSubmit={submitJobApplication} action="">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-">Linkedin URL</label>
                            <input type="url" name='linkedin' className="input w-full" placeholder="Linkedin URL" />
                            <label className="fieldset-label">Github URL</label>
                            <input type="url" name='github' className="input w-full" placeholder="Github URL" />
                            <label className="fieldset-label">Resume URL</label>
                            <input type="url" name='resume' className="input w-full" placeholder="Resume URL" />

                            <button className="btn btn-neutral mt-4">Apply</button>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
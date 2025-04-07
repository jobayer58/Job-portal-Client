import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from '../../assets/Animation - 1742839087210.json'
import AuthContext from '../../contexr/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        // password validation
        // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6}$/;  

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96">
                        <Lottie animationData={registerLottieData}></Lottie>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </div>
                        </form>
                        <div className='divider'>OR</div>
                        <div className='flex justify-center items-center pb-5'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
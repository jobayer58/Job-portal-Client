import React, { use, useContext } from 'react';
import AuthContext from '../../contexr/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignIn = () => {

    const {signinUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        signinUser(email,password)
        .then(result => {
            console.log(result.user.email);
            const user = {email: result.user.email}
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true} )
            .then(res => console.log(res.data))
    
            // navigate(from)
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
                        {/* <Lottie animationData={registerLottieData}></Lottie> */}

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="ml-8 mt-4 text-5xl font-bold">LogIn now!</h1>
                        <form onSubmit={handleSignIn}>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">LogIn</button>
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

export default SignIn;
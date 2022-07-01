import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
const Signin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const userInfo = {
            email: data.email,
            pass: data.password
        }




        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message == 'success') {
                    console.log(data)
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken)
                    navigate(from, { replace: true });
                }
                else {
                    toast.error(data.message)
                    localStorage.removeItem('accessToken')
                }
            })

    }
    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='text-3xl font-bold'>SignIn</h3>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>

                {/* Email Input */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide a valid email'
                                }
                            }
                        )}
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                    </label>
                </div>

                {/* Password Input */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        {...register("password",
                            {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Password length should least 8 characters'
                                }
                            }
                        )}
                        type="password"
                        placeholder="Your Password"
                        className="input input-bordered w-full"
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                    </label>
                </div>



                <p>New here..? Please <Link className="text-primary" to='/signup'>Register here</Link></p>
                <input className='btn btn-primary w-full' type="submit" value='Sign in' />
            </form>
        </div>
    );
};

export default Signin;
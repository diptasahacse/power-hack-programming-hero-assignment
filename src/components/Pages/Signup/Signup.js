import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            pass: data.password
        }

        


        fetch('http://localhost:5000/registration', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast("Successfully user created. Please login in here.");
                    navigate('/signin')
                }
                else{
                    toast.error("This user already created")
                }
            })


    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='px-4'>
                <h3 className='text-3xl font-bold'>Signup</h3>

                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    {/* Full Name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            {...register("name",
                                {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Name should long at least 5'
                                    }
                                }
                            )}
                            type="text"
                            placeholder="Your Full Name"
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        </label>
                    </div>
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
                    <p>Already have an account? Please <Link className="text-primary" to='/signin'>Sign in here</Link></p>
                    <input className='btn btn-primary w-full' type="submit" value='Register' />
                </form>
            </div>
        </div>
    );
};

export default Signup;
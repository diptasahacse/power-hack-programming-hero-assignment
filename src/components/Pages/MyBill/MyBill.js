import React from 'react';

const MyBill = () => {
    return (
        <div className='bg-transparent'>
            <div class="max-w-7xl mx-auto">
                <div className='mt-10'>
                    {/* Search area */}
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <p className='mr-5'>Billing</p>
                            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <button className='btn btn-primary'>Add New Bill</button>
                        </div>

                    </div>
                    {/* Bill table area */}
                    <div className='mt-5'>
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBill;
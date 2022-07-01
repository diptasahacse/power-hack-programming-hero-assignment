import React from 'react';
import AddBillModal from './AddBillModal/AddBillModal';

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
                            <label htmlFor="add-bill-modal" className='btn btn-primary'>Add New Bill</label>
                        </div>

                    </div>
                    {/* Bill table area */}
                    <div className='mt-5'>
                        <div class="overflow-x-auto">
                            <table class="table w-full">

                                <thead>
                                    <tr>
                                        <th>Billing ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Paid Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                        <td>Blue</td>
                                        <td>Blue</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            {
                <AddBillModal></AddBillModal>
            }
        </div>
    );
};

export default MyBill;
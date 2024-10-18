import React from 'react';

const ChangePassword = () => {
    return (
        <div className='p-4 bg-white'>
            <h2 className='text-xl text-slate-600 pb-5'>Change Password</h2>
            <form action="">
                <div className='flex flex-col gap-1 mb-2 '>
                    <label htmlFor="old_pass">Old Password</label>
                    <input type="password" name='old_pass' id='old_pass' 
                    placeholder='Old Password' className='outline-none px-3 py-1 border rounded-md text-slate-600'/>
                </div>
                <div className='flex flex-col gap-1 mb-2 '>
                    <label htmlFor="new_pass">New Password</label>
                    <input type="password" name='new_pass' id='new_pass' 
                    placeholder='New Password' className='outline-none px-3 py-1 border rounded-md text-slate-600'/>
                </div>
                <div className='flex flex-col gap-1 mb-2 '>
                    <label htmlFor="con_pass">Confirm Password</label>
                    <input type="password" name='con_pass' id='con_pass' 
                    placeholder='Confirm Password' className='outline-none px-3 py-1 border rounded-md text-slate-600'/>
                </div>
                <div>
                    <button className='px-8 py-2 bg-[#852770] shadow-lg text-white hover:shadow-[#852770]/30 rounded-md'>Update Password</button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
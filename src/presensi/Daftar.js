import React, { useState } from 'react'

function Daftar() {
    const [daftar, setdaftar] = useState([])

    return (
        <div className='py-2 px-4'>
            <div className='py-2 px-2 text-black font-extrabold text-[1rem]'>Daftar</div>

            <div>
                <form className='text-2xl my-2 mx-2'
                >
                    <label className="block">
                        <div className='py-2'>
                            <span
                                className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium 
                             text-black text-lg">
                                Name
                            </span>
                            <input
                                type="name" name="name"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-[#020202]
                             placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 
                             block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="input your name" autoComplete='off' />
                        </div>


                    </label>

                    <div className='mr-4'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-xl my-4 
                            border border-blue-700 rounded"
                            type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Daftar
import React, { useState } from 'react'

function Pendaftaran() {

    const [daftar, setdaftar] = useState([])

    const fungsindaftar = (event, index) => {
        event.preventDefault()
        const nama = event.target.name.value
        const email = event.target.email.value
        const pass = event.target.password.value
        // console.log("N E P", nama, email, pass);
        const obj = { nama: nama, email: email, password: pass }
        const data =[...daftar]
        data.push(obj)
        // localStorage.setItem("pendaftaran", JSON.stringify(daftar))
        console.log(data)
        // setdaftar(daftar2)

        // event.target.name.value = ""
        // event.target.email.value = ""
        // event.target.password.value = ""
        // untuk mengosongkan inputan setelah disubmit cuy
        // console.log("ini adlh state daftar", daftar);
    }

    return (
        <div>Daftar TEMPLATE EMAIL : @gmail.com
            <form className='text-2xl my-2 mx-2'
                onSubmit={fungsindaftar}>

                <label className="block">
                    <div>
                        <span
                            className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium 
                             text-black text-lg">
                            NAME
                        </span>
                        <input
                            type="text" name="name"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-[#020202]
                             placeholder-slate-400 focus:outline-none focus:border-sky-700 focus:ring-sky-800 
                             block w-full rounded-md sm:text-sm "
                            placeholder="input your name" autoComplete='off' />
                    </div>

                    <div>
                        <span
                            className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium 
                             text-black text-lg">
                            Email
                        </span>
                        <input
                            type="email" name="email"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-[#020202]
                             placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 
                             block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="gegenpressing@example.com" autoComplete='off' />
                    </div>

                    <div>
                        <span
                            className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium 
                             text-black text-lg">
                            Password
                        </span>
                        <input
                            type="text" name="password"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-[#020202]
                             placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 
                             block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="input your password" autoComplete='off' />
                    </div>

                </label>
                <div className='mr-4'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 text-base my-4 
                            border border-blue-700 rounded"
                        type="submit">
                        DAFTAR
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Pendaftaran
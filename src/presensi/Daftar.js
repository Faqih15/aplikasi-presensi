import React, { useState } from 'react'

function Daftar() {
    const [daftar, setdaftar] = useState([])

    const mendaftar = (event) => {
        event.preventDefault()
        const user = event.target.name.value
        const siswa = JSON.parse(localStorage.getItem("siswa"))
        if (user) {
            if (siswa) {
                const userbaru = { nama: user }
                const userlama = JSON.parse(localStorage.getItem("siswa"))
                userlama.push(userbaru)
                setdaftar(userlama)
                localStorage.setItem("siswa", JSON.stringify(userlama))
            } else {
                const userbaru = { nama: user }
                const userlama = [...daftar]
                userlama.push(userbaru)
                setdaftar(userlama)
                localStorage.setItem("siswa", JSON.stringify(userlama))
            }
            event.target.name.value = ""

        } else { alert("anda belum mengisi nama") }
    }

    return (
        <div className='p-2 m-2 md:py-2 md:px-4 border-blue-700 border-4'>
            <div className='py-2 px-2 text-black font-extrabold text-[1rem]'>Daftar</div>

            <div>
                <form 
                className='text-2xl my-2 mx-2'
                    onSubmit={mendaftar}
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
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-xl my-4 
                            border border-blue-700 rounded"
                            type="submit">
                            Daftar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Daftar
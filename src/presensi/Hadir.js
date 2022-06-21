import React, { useEffect, useState } from 'react'

function Hadir() {
  const [login, setlogin] = useState([])

  const [list, setList] = useState(JSON.parse(localStorage.getItem("pendaftaran")) || [])

  useEffect(() => {
    if (localStorage.getItem("pendaftaran")) {
      setList(JSON.parse(localStorage.getItem("pendaftaran")))
    }
  }, [])

  const ndaftar = (event) => {
    event.preventDefault()
    const nama = event.target.name.value
    const email = event.target.email.value
    const pass = event.target.password.value

    if (nama && email && pass) {
      const databaru = { nama: nama, email: email, password: pass }
      const data = [...login]
      data.push(databaru)
      // console.log("ini adalah data push", data);
      setList(data)
      localStorage.setItem("pendaftaran", JSON.stringify(data))
      setlogin(data)
      // alert("berhasil")
      event.target.nama.value = ""
      event.target.email.value = ""
      event.target.password.value = ""
      console.log("SATU 1");

    } else { alert("GAGAL") }

  }

  const jamMelbu = (event) => {
    event.preventDefault();
    // const now = new Date()
    // const jamMasuk = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    // const nama = event.target.label.value
    // const listBaru = { nama: nama, jamMasuk: jamMasuk, jamKeluar: "" }
    // const tambahkan = list.concat(listBaru)
    // localStorage.setItem("data harian", JSON.stringify(tambahkan))
    // setList(tambahkan)
    // event.target.label.value = "" //untuk mengosongkan input setelah submit
  }

  const jamMetu = (e, index) => {
    e.preventDefault()
    // const now = new Date()
    // const jamKeluar = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    // const newList = [...list]
    // newList[index].jamKeluar = (jamKeluar)
    // localStorage.setIstem("data harian", JSON.stringify(newList))
    // setList(newList)

  }

  console.log(list, 'list');

  return (
    <div className='py-2 px-4'>
      <div>
        <p className='py-2 px-2 text-black font-extrabold text-[1,5rem]'>Login Karyawan PT Bajaj Bajuri</p >
      </div>

      <form className='text-2xl my-2 mx-2'
        onSubmit={ndaftar}
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

      <div className="grid items-center space-x-5 border-[#050505] border-x-2 border-y-2 
      my-4 px-4 py-2 rounded bg-[#7fe1ec]">
        <div>
          <p className='py-2 px-2 text-black font-extrabold text-[1rem]'>
            Presensi Karyawan</p >
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="justify-between items-center font-bold grid grid-cols-4 mx-6">
              <p>{item.nama}</p>
              <p>{item.jamMasuk}</p>
              <button key={index}
                className="bg-[#0f0cd8] px-1 py-2 m-5"
              // onClick={(e) => { jamMetu(e, index) }} 
              >
                Keluar
              </button>
              <p>{item.jamKeluar}</p>
            </div>
          )
        })}
      </div>

    </div>
  )


}

export default Hadir

{/* <div>
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
  placeholder="contoh@example.com" autoComplete='off' />
</div>

<div className='py-2'>
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
</div> */}
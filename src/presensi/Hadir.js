import React, { useEffect, useState } from 'react'

function Hadir() {
  const [list, setList] = useState([])

  useEffect(() => {
    if (localStorage.getItem("data harian")) {
      setList(JSON.parse(localStorage.getItem("data harian")))
    }
  }, [])

  const fungsihadir = (event) => {
    event.preventDefault();
    const now = new Date()
    const jamMasuk = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    const nama = event.target.label.value
    const listBaru = { nama: nama, jamMasuk: jamMasuk, jamKeluar: "" }
    const tambahkan = list.concat(listBaru)
    localStorage.setItem("data harian", JSON.stringify(tambahkan))
    setList(tambahkan)
    event.target.label.value = "" //untuk mengosongkan input setelah submit

  }

  const fungsikeluar = (e, index) => {
    e.preventDefault()
    const now = new Date()
    const jamKeluar = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    const newList = [...list]
    newList[index].jamKeluar = (jamKeluar)

    localStorage.setItem("data harian", JSON.stringify(newList))

    setList(newList)

    // console.log(list);

    // console.log(index);

  }

  // console.log("ini adalah list", list);

  return (
    <div className='py-2 px-4'>
      <div className='h-[6rem]'>
        <p className='py-2 px-4 text-black font-extrabold text-[2rem]'>Daftar Hadir Karyawan</p >
      </div>

      <div className="grid items-center space-x-5 border-[#050505] border-x-2 border-y-4 my-4 px-4 py-2 rounded 
                      bg-[#35f71c]">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="justify-between items-center font-bold grid grid-cols-4 mx-6">
              <p>{item.nama}</p>
              <p>{item.jamMasuk}</p>
              <button key={index}
                className="bg-[#0f0cd8] px-1 py-2 m-5"
                onClick={(e) => { fungsikeluar(e, index) }}>
                Keluar
              </button>
              <p>{item.jamKeluar}</p>
            </div>
          )
        })}
      </div>
      <form
        onSubmit={fungsihadir}
        className="outline-none bg-white items-center border border-black px-4 py-2 rounded"
      >
        <h3>Masukkan Nama anda</h3>
        <div className="my-4">
          <input
            className=" focus-within:outline-[#92ff00] w-full outline-2 mb-2"
            name="label"
            type="text"
            placeholder="Input Your Name"
            autoComplete="off"
            required
          />
          <button
            className="bg-[#f55555] px-3 py-2 m-5"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )


}

export default Hadir
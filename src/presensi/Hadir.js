import React, { useEffect, useState } from 'react'

function Hadir() {
  const [list, setList] = useState([])

  useEffect(() => {
    if (localStorage.getItem("data hadir")) {
      setList(JSON.parse(localStorage.getItem("data hadir"))) //
    }
  }, [])

  const fungsihadir = (event) => {
    event.preventDefault();
    const now = new Date()
    const jamMasuk = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    const nama = event.target.label.value
    const listBaru = { nama: nama, jamMasuk: jamMasuk, jamKeluar: "" }
    const tambahkan = list.concat(listBaru)
    localStorage.setItem("data hadir", JSON.stringify(tambahkan))

    setList(tambahkan)

    event.target.label.value = ""

  }

  const fungsikeluar = (e, index) => {
    e.preventDefault()
    const now = new Date()
    const jamKeluar = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()

    const newList = [...list]
    newList[index].jamKeluar = jamKeluar
    setList(newList)

    console.log(newList);
    console.log(index);
    console.log(jamKeluar);
  }

  return (
    <div>
      <div className='h-[6rem]'>
        <p className='py-2 px-4 text-black font-extrabold text-[2rem]'>Daftar Hadir Karyawan</p >
      </div>

      <div className="grid items-center space-x-5 border-x-2	border-y-4 my-4 px-4 py-2 rounded ">
        {list.map((item, index) => {
          return (
            <div key={index} className="flex justify-between items-center">
              <p>{item.nama}</p>
              <p>{item.jamMasuk}</p>
              <button key={index}
                className="bg-[#0f0cd8] px-3 py-2 m-5"
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
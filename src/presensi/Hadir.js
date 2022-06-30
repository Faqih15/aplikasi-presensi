import React, { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'

const defaultAbsen = [
  { nama: 'agus', tanggal: '24-06-2022', masuk: '09:00:00', keluar: '15:00:00' },
]

function Hadir() {

  const localSiswa = localStorage.getItem("siswa")
  const localAbsen = localStorage.getItem("absen")
  const [siswa] = useState(JSON.parse(localSiswa) || [])
  const [absen, setAbsen] = useState(JSON.parse(localAbsen) || [])

  const login = (event) => {
    event.preventDefault()
    const nama = event.target.name.value
    const siswaLogin = siswa.find(x => x.nama === nama)
    const tanggal = dayjs().format('DD:MM:YYYY');
    const masuk = dayjs().format('HH:mm:ss')
    console.log("peyek");
    if (siswaLogin) {
      const siswaAbsen = absen.find(x => x.nama === nama && x.tanggal === tanggal)
      console.log("0");
      if (siswaAbsen) {
        const newAbsen = [...absen]
        console.log("1")
        newAbsen.push({ nama, tanggal, masuk, keluar: '' })
        setAbsen(newAbsen)
        localStorage.setItem('absen', JSON.stringify(newAbsen))
      } else {
        console.log("2")
        const newAbsen = [...absen]
        newAbsen.push({ nama, tanggal, masuk, keluar: '' })
        setAbsen(newAbsen)
        localStorage.setItem('absen', JSON.stringify(newAbsen))
      }
    } else {
      alert("daftar dulu dong baru login")
      console.log("3");
    }
    event.target.name.value = ""
  }
  const handleKeluar = (e, a, index) => {

    // e.preventDefault()
    // console.log(a, b)

    const siswaAbsen = absen.find(x => x.nama === a.nama && x.tanggal === a.tanggal)
    // console.log(siswaAbsen);
    const keluar = dayjs().format('HH:mm:ss')
    if (siswaAbsen) {
      console.log("siswa absen ada");
      const newAbsen = [...absen]
      newAbsen[index].keluar = keluar
      // newAbsen.keluar === "keluar" ? { ...absen, keluar } : newAbsen
      console.log(newAbsen);
      setAbsen(newAbsen)
      localStorage.setItem('absen', JSON.stringify(newAbsen))
    }
  }

  // useEffect(() => {
  //   console.log("isi dari localStorage absen :", absen)
  // }, [absen])

  return (
    <div className='p-2 m-2 md:py-2 md:px-4 border-red-600 border-4'>
      <div>
        <p className='py-2 px-2 text-black font-extrabold text-[1,5rem]'>Login Karyawan PT Bajaj Bajuri</p >
      </div>

      <form className='text-2xl my-2 mx-2' onSubmit={login} >
        <label className="block">
          <div className='py-2'>
            <span
              className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium 
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
        {absen.map((x, i) => {
          return <div key={i} className='grid grid-cols-2'>
            <div className='grid grid-cols-1'>
              <span className=''>nama</span>
              <span>tanggal</span>
              <span>jam masuk</span>
              <span>jam keluar</span>
            </div>
            <div className='grid grid-cols-1'>
              <span className=''>{x.nama}</span>
              <span>{x.tanggal}</span>
              <span>{x.masuk}</span>
              <span>{x.keluar}</span>
            </div>
            <button className='' onClick={(e) => { handleKeluar(e, x, i) }}>Keluar</button>
          </div>
        })}
      </div>

    </div>
  )


}
// event adalah fungsi callback yang mempunyai return/parameter object 
export default Hadir

  // const login = (event) => {
  //   event.preventDefault()
  //   const datadaftar = JSON.parse(localStorage.getItem("dataPendaftaran"))
  //   const inputed = event.target.name.value
  //   const today = new Date();
  //   const yyyy = today.getFullYear();
  //   const mm = today.getMonth() + 1;
  //   const dd = today.getDate();
  //   const tanggal = dd + '-' + mm + '-' + yyyy;
  //   // const presensi = JSON.parse(localStorage.getItem("presensi"))
  //   const temukan = datadaftar.find((i) => i.nama === inputed);
  //   // console.log("temukan 1", temukan);

  //   if ((inputed === temukan.nama || temukan) && localStorage.getItem(tanggal) === null) {
  //     console.log(inputed, "kondisi tanggal blm ada")
  //     localStorage.setItem("dataPresensi", JSON.stringify([{ nama: inputed, jamMasuk: "", jamKeluar: "" }]))
  //     localStorage.setItem("dataabsen", JSON.stringify(temukan))
  //     setloginer(temukan)
  //     setAbsen(temukan)
  //   } else if ((inputed === temukan.nama || temukan) && localStorage.hasOwnProperty(tanggal)) {
  //     console.log("else if jalan, update key local storage tanggal")
  //     const data1 = JSON.parse(localStorage.getItem(tanggal));
  //     const data2 = [{ nama: inputed, jamMasuk: "", jamKeluar: "" }];
  //     data1.push(data2);
  //     localStorage.setItem(tanggal, JSON.stringify(data1));
  //     setloginer(temukan)
  //   } else if (inputed !== temukan.nama || temukan) {
  //     console.log("else if terakhir jalan")
  //     alert("GAGAL")
  //   }
  //   event.target.name.value = ""
  // }
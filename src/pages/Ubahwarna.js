import React, { useState } from 'react'

function Ubahwarna(props1) {
    // const warna = ['bg-blue-600', 'bg-yellow-400', 'bg-cyan-500', 'bg-red-600']
    // const angka = 0
    // console.log("props1", props1);

    // const [urutanwarna, seturutan] = useState(0)
    // const fungsiubah = () => {
    //     if (urutanwarna === 3) {
    //         seturutan(0)
    //     } else { seturutan(urutanwarna + 1) }
    // }

    return (
        <div>
            {/* <div className={`${props1.a[props1.index]} w-40 h-40`}></div> */}
            <button onClick={props1.d} className='bg-blue-500 text-white font-bold py-2 px-6 rounded'>
                ubah warna
            </button>
            {/* <props1.coba /> */}
        </div>
    )
}

export default Ubahwarna
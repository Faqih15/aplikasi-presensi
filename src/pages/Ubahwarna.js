import React, { useState } from 'react'

function Ubahwarna(props1) {

    return (
        <div>
            <button onClick={props1.d} className='bg-blue-500 text-white font-bold py-2 px-6 rounded'>
                ubah warna
            </button>
        </div>
    )
}

export default Ubahwarna
import React, { useState } from 'react';
import Vwarna from './Vwarna'
import Ubahwarna from './Ubahwarna'

function Gantiwarna() {
    const warna = ["bg-purple-600", "bg-lime-500", "bg-blue-600", "bg-red-600"]
    const [index, setIndex] = useState(0)

    const fungsiganti = () => {
        if (index === 3) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <div >
            <div className={`${warna[index]} w-[8rem] h-[8rem]`}></div>
            <button onClick={fungsiganti} className={`bg-blue-500 text-white font-bold py-2 px-6 rounded opacity-90`}>
                Ganti Warna
            </button>
            <Ubahwarna a={warna} b={index} c={setIndex} d={fungsiganti} coba={Vwarna} />
        </div>
    )
}

export default Gantiwarna
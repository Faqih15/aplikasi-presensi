import React, { useState } from 'react'

function Gantiwarna() {
    const warna = ["bg-purple-600", "bg-lime-500", "bg-red-600", "bg-blue-600"]
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
            <button onClick={fungsiganti} className={`bg-[#f30808]`}>Ganti Warna</button>
        </div>
    )
}

export default Gantiwarna
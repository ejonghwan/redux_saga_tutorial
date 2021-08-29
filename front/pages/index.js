import React, { useState } from 'react'
import axios from 'axios'




const Index = () => {

    const [txt, setTxt] = useState('') 
    const [txt2, setTxt2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        datafn(txt)
    }

    const handleCahnge = (e) => {
        const { value } = e.target
        setTxt(value)
    }


    const datafn = async(data) => {
        // console.log(data)
        const result = await axios.post('http://localhost:3060/test', {he: data})
        console.log(result.data.he)
        setTxt2(result.data.he)
        return result.data.he
    } 

    // const dataman = datafn()
    // console.log(dataman)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={txt} name="hoho" onChange={handleCahnge} />
                <button>submit</button>
            </form>
            {txt}
            <br />
            data: {txt2}
        </div>
    )
}

export default Index;
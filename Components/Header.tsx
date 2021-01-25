import React, {useState} from 'react'

export default function Header() {
    const [head, setHead]=useState('Hello')
    return (
        <div>
            This is the Header
            {head}
            <button onClick={()=>setHead('Hi')}>Click</button>
        </div>
    )
}

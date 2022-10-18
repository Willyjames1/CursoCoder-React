import React from 'react'

export default function ModelSelect(data, onSelect) {
    const handleChange = (e) => {

    }
    return (
        <select onChange={handleChange}>
            {data.map((value) => (
                <option id={value.id}>{value.modelo}</option>
            ))}

        </select>
    )
}

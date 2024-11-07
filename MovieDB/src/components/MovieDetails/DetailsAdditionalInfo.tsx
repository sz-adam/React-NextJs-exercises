import React from 'react'

type Props = {
    title: string;
    value: string | number;
}

const DetailsAdditionalInfo: React.FC<Props> = ({ title, value }) => {
    return (
        <div className="bg-gray-700 bg-opacity-80 p-4 rounded-lg">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-gray-300">{value}</p>
        </div>
    )
}

export default DetailsAdditionalInfo
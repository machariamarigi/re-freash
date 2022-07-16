import React, { useState } from "react"


const UseStateComponent = () => {
    const [arr, arrSet] = useState<number[]>([]);
    const [name, nameSet] = useState<string | null>(null);

    return (
        <div>
            <div>
                <button onClick={() => arrSet([...arr, arr.length + 1])}>
                    Add To Array
                </button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={() => nameSet("Macharia Marigi")}>
                    Set name
                </button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateComponent;

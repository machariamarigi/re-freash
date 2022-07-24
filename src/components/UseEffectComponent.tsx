import React, { useEffect, useState } from 'react';

const useEffectComponent = () => {
    const [val, valSet] = useState(1);

    useEffect(() => {
        const timer = window.setInterval(() => {
            valSet(v => v + 1);
        }, 1000);
        return () => window.clearInterval(timer)
    }, [])

    return <div>{val}</div>
}

export default useEffectComponent;

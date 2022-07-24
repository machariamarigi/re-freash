import React from 'react';
import useFetchData from "../hooks/useFetchData"

const CustomHookComponent = () => {
    const { data, done } = useFetchData("/data/hv-taplist.json");
    console.log(data);
    return(
        <div>
            { done && (
                <img src={data![0].logo} alt="Beverage logo" />
            )}
        </div>

    )
}

export default CustomHookComponent
import React from 'react';
import { Beverage } from '../@types/beverage';
import useFetchData from "../hooks/useFetchData"

const CustomHookComponent = () => {
    const { data, done } = useFetchData<Beverage[]>("/data/hv-taplist.json");
    return(
        <div>
            { done && (
                <img src={data![0].logo} alt="Beverage logo" />
            )}
        </div>

    )
}

export default CustomHookComponent
import React, { useMemo } from 'react';
import { Beverage } from '../@types/beverage';
import useFetchData from "../hooks/useFetchData"

const CustomHookComponent = () => {
    const { data } = useFetchData<Beverage[]>("/data/hv-taplist.json");
    const portlandTaps = useMemo(() => 
        (data || []).filter(beverage => beverage.producerLocation.includes("Portland")),
        [data]
    )

    

    return(
        <div>
            { portlandTaps.length && (
                <img src={portlandTaps![0].logo} alt="Beverage logo" />
            )}
        </div>

    )
}

export default CustomHookComponent
import { useEffect, useState } from "react";
import { Beverage } from "../@types/beverage";

const useFetchData = (url: string) : {
    data: Beverage[] | null;
    done: boolean;
} => {
    const [data, dataSet] = useState<Beverage[]>([]);
    const [done, doneSet] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((resp) =>{
                return resp.json()
            })
            .then((respData: Beverage[]) => {
                dataSet(respData);
                doneSet(true);
            })
    }, [url])
    return { data, done }
}

export default useFetchData;

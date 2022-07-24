import { useEffect, useState } from "react";


const useFetchData = <Payload> (url: string) : {
    data: Payload | null;
    done: boolean;
} => {
    const [data, dataSet] = useState<Payload | null>(null);
    const [done, doneSet] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((resp) =>{
                return resp.json()
            })
            .then((respData: Payload) => {
                dataSet(respData);
                doneSet(true);
            })
    }, [url])
    return { data, done }
}

export default useFetchData;

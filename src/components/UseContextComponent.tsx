import React, { useContext, useState } from 'react';
import UserContext, { UserState } from '../context/store';

const ConsumerComponent = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <div>First: {user.first}</div>
            <div>Second: {user.second}</div>
        </div>
    )
}

const UseContextComponent = () => {
    const [user, userSet] = useState({
        first: 'Jane',
        second: 'Doe'
    });
    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button
            type="button"
                onClick={() => userSet({
                    first: 'John',
                    second: 'Doe'
                })}
            >
                Change Context
            </button>
        </UserContext.Provider>
    )
}

export default UseContextComponent;

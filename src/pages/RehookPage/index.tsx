import React, { FC, ReactElement } from 'react';
import CustomHookComponent from '../../components/CustomHookComponent';
import UseContextComponent from '../../components/UseContextComponent';
import UseEffectComponent from '../../components/UseEffectComponent';
import UseReducerComponent from '../../components/UseReducerComponent';
import UseRefComponent from '../../components/UseRefComponent';
import UseStateComponent from '../../components/UseStateComponent';
import './RehookPage.css';

const RehookPage: FC<any> = (): ReactElement => {
    return (
        <div>
            <h1>CustomHook</h1>
            <CustomHookComponent />
            <h1>useContext</h1>
            <UseContextComponent />
            <h1>useEffect</h1>
            <UseEffectComponent />
            <h1>useReducer</h1>
            <UseReducerComponent />
            <h1>useRef</h1>
            <UseRefComponent />
            <h1>useState</h1>
            <UseStateComponent />
        </div>
    )
}

export default RehookPage;

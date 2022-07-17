import React, { FC, ReactElement } from 'react';
import UseContextComponent from '../../components/UseContextComponent';
import UseEffectComponent from '../../components/UseEffectComponent';
import UseStateComponent from '../../components/UseStateComponent';
import './RehookPage.css';

const RehookPage: FC<any> = (): ReactElement => {
    return (
        <div>
            <h1>useContext</h1>
            <UseContextComponent />
            <h1>useEffect</h1>
            <UseEffectComponent />
            <h1>useState</h1>
            <UseStateComponent />
        </div>
    )
}

export default RehookPage;

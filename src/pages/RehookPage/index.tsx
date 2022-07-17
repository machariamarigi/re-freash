import React, { FC, ReactElement } from 'react';
import UseEffectComponent from '../../components/UseEffectComponent';
import UseStateComponent from '../../components/UseStateComponent';
import './RehookPage.css';

const RehookPage: FC<any> = (): ReactElement => {
    return (
        <div>
            <h1>useEffect</h1>
            <UseEffectComponent />
            <h1>useState</h1>
            <UseStateComponent />
        </div>
    )
}

export default RehookPage;

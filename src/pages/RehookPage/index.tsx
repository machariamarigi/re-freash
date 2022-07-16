import React, { FC, ReactElement } from 'react';
import UseStateComponent from '../../components/UseStateComponent';
import './RehookPage.css';

const RehookPage: FC<any> = (): ReactElement => {
    return (
        <div>
            <h1>useState</h1>
            <UseStateComponent />
        </div>
    )
}

export default RehookPage;

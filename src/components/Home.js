import React,{Fragment} from 'react';
import {Heading} from './Heading';
import {ShipList} from './ShipList';


export const Home = () => {
    return (
        <Fragment>
            <Heading/>
            <ShipList/>
        </Fragment>
    )
}

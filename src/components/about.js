import React from 'react';
import { Util } from '../helpers/util';

const aboutComponent = () => {
    return <p className="about">About! {Util.hello()}</p>;
};

export default aboutComponent;

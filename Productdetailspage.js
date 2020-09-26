import React, { Component } from 'react';
import Imageagllery from './Imagegallery';
import Description from './Description';

export default class Productdetailspage extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>This is the home page i am designing</h3>
                <Imageagllery/>
                <Description/>
            </React.Fragment>
        )
    }
}

import React from 'react';
import Image from './Image';

class Images extends React.Component {
    loadStub = (event) => {
        event.preventDefault();
        this.props.loadStubImages();
    }

    render(){
        const {images} = this.props;
        return (
            <React.Fragment>
                <div className="images clearfix">
                <style>
                    {Object.keys(this.props.images).map(key => `.image-${key}{background-image:url('https://farm${this.props.images[key].farm}.staticflickr.com/${this.props.images[key].server}/${this.props.images[key].id}_${this.props.images[key].secret}.jpg');}`)}
                </style>
                    {Object.keys(this.props.images).map(key => <Image key={key} imageData={this.props.images[key]} getImageDetails={this.props.getImageDetails}/>)}
                </div>
                {/* <button onClick={this.loadStub}>Load Stub Images</button> */}
            </React.Fragment>
        )
    }
}

export default Images;
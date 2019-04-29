import React from 'react';

class Image extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.getImageDetails(this.props.imageData.id, this.props.imageData.secret);
    }
   
    render(){
        const {id, farm, server, secret } = this.props.imageData;
        return (
            <React.Fragment>
                <a href="" className={`flickr-image image-${id}`} onClick={this.handleClick}>
                </a>
            </React.Fragment>
        )
    }
}

export default Image;
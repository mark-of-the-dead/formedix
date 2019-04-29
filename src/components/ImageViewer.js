import React from 'react';
import { timeConverter} from '../utils';

class ImageViewer extends React.Component {
    hideImage = (event) => {
        event.preventDefault();
    }

    render(){
        const {farm, server, id, secret, dateuploaded, description, title, tags} = this.props.image.photo || "";
        console.log('PHOTO DATA - ', this.props.image.photo);

        return (
            <React.Fragment>
                <div id="lightbox" className="modal">
                    <span className="close cursor" onClick={this.props.closeModal}>&times;</span>
                    <div className="modal-content">

                        <div className="mySlides">
                            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg`} className="lightboxImage" />
                        </div>

                        <div className="caption-container">
                            <h3>{title._content}</h3>
                            <h4>Uploaded: {timeConverter(dateuploaded)}</h4>
                            <p id="caption">{description._content}</p>
                            <ul className="photo-tags">
                            {tags.tag.map((value, index) => (
                                <li>{value._content}</li>
                            ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ImageViewer;
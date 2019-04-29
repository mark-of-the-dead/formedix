import React from 'react';
import Header from './Header';
import Images from './Images';
import ImageViewer from './ImageViewer';
import config from '../config';
import photosStub from '../stub-data';
import detailsStub from '../stub-photo-data';

class App extends React.Component {
    state = {
        images : {},
        currentImage : {},
        currentPage : 1
    };

    loadStubImages = () => {
        let imagesObj = {};
        photosStub.photos.photo.forEach( function(item){
            imagesObj[item.id] = item;
        }) 
    
        this.setState({ images : imagesObj});
    }

    loadFiftyImages = () => {
        const images = {...this.state.images}
        const currentPage = Number(this.state.currentPage)+1;
        const keywords = this.props.match.params.keywords;

        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.apikey}&tags=${keywords}&safe_search=1&per_page=50&page=${this.state.currentPage}&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then((jsonData) => {            
            jsonData.photos.photo.forEach( function(item){
                if(item.farm > 0 && item.server > 0){ // Flickr seem to return some bad data
                    images[item.id] = item;
                }
            }) 
        
            this.setState({ images, currentPage });
            document.addEventListener('scroll', this.trackScrolling);

        })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
    }

    getImageDetails = (image, secret) => {

        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${config.apikey}&photo_id=${image}&secret=${secret}&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then((jsonData) => {        
            this.setState({ currentImage : jsonData });
            this.showModal();
        })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })

    }

    setCurrentImage = (image) => {
        this.setState({currentImage : image});
    }

    showModal = () => {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = "block";
    }

    hideModal = () => {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = "none";
    }

    componentWillMount(){
        this.loadFiftyImages();
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount(){
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
      
    trackScrolling = () => {
    const wrappedElement = document.getElementById('main');
        if (this.isBottom(wrappedElement)) {
            console.log('body bottom reached');
            this.loadFiftyImages();
            document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    render() {
        let imageViewer;
        if(this.state.currentImage.photo){
            imageViewer = <ImageViewer image={this.state.currentImage} closeModal={this.hideModal} />;
        }
        return (
            <div className="app-container">
                <Header title="Formedix" subTitle="Image Search Test" buttonLabel="&lt;- Back" handleClick={this.props.history.goBack}/>
                <Images images={this.state.images} loadStubImages={this.loadStubImages} getImageDetails={this.getImageDetails}/>
                {imageViewer}
            </div>
        )
    }
}

export default App;
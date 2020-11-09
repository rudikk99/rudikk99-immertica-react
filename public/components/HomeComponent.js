import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import About from './AboutComponent';
import '../css/home.css'

export default (props) => {
    const { id } = props;
    return <ScrollableAnchor id={'home-scroll'}>
        <section  id={id}>
    	<div className="container">
    		<div className="row">
    			<div className="col-md-12"> 
	
                    <img src={require('../img/DNAservice.jpg')} />	
                    https://stackoverflow.com/questions/42573645/how-can-i-get-direct-video-url-from-youtube-video-url#comment72280571_42573645

    			</div>
    		</div>
    	</div>
    </section>
    </ScrollableAnchor >
}
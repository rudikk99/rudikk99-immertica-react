import React, { Component } from 'react';

import Blog from './BlogComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Personall from './PersonallComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFeedback, postComment, fetchFeedback, fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ScrollableAnchor from 'react-scrollable-anchor'
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
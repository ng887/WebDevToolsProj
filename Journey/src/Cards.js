import React, {Component} from 'react';
import Card from './Card';
import './App.css';
import {Carousel} from 'react-bootstrap';


export default class Cards extends Component  {
    // console.log(pointsOfInterest);
    // console.log('hello');
    //console.log(pointsOfInterest[1]);

    handlePassLocation(location) {
        this.props.getPassedLocation(location);
    }

    render() {
        const tempDiv = [];
        const noOfDays = this.props.noOfDays;
        const pointsOfInterest = this.props.pointsOfInterest;
        for (let i = 0; i < pointsOfInterest.length -4; i=i+4) {
           
            tempDiv.push(
                <Carousel.Item >
                  <h2 className='text-center'> PLACES OF INTEREST </h2> 
                <div className='desktopLayout margin-left'>
                  <Card passLocation={this.handlePassLocation.bind(this)} pointOfInterest={pointsOfInterest[i]} i={i} key={i}/>
                  <Card passLocation={this.handlePassLocation.bind(this)} pointOfInterest={pointsOfInterest[i+1]} i={i+1} key={i+1}/>
                  <Card passLocation={this.handlePassLocation.bind(this)} pointOfInterest={pointsOfInterest[i+2]} i={i+2} key={i+2}/>
                  <Card passLocation={this.handlePassLocation.bind(this)} pointOfInterest={pointsOfInterest[i+3]} i={i+2} key={i+3}/>
                </div>
                </Carousel.Item>
            );
        }

        return (
        <div>
            <div id="test" key="test" className='desktopLayout'>        
            </div>

             {this.props.pointsOfInterest && 
            <Carousel className='brand-color'>          
                      {tempDiv}
            </Carousel>}
        </div>
      
        )
    }

}



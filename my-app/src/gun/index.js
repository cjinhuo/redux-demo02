import React from 'react';
import Gun from './Gun'


export default class Show extends React.Component{
    render(){
        return(
            <Gun store={this.props.store}
            addGun={this.props.addGun} 
            removeGun={this.props.removeGun} />
        )
    }
}
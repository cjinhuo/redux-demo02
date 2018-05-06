import React from 'react';


export default class Gun extends React.Component{
    render(){
        const store = this.props.store;
        return(
            <div>
                <h1>当前有机枪${store.getState()}把</h1>
                <button onClick={()=>{store.dispatch(this.props.addGun())}}>ADD</button>
                <button onClick={()=>{store.dispatch(this.props.removeGun())}}>REMOVE</button>
            </div>
        )
    }
}
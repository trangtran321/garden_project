import React, {Component} from 'react';

export class Stuff extends Component{
    render(){
        return(         
            //RETURN 1 SINGLE ELEMENT!!! 
            <>
                <text class="text-lg text-black font-semibold">{this.props.TrangMes}</text>
                <button>{this.props.message}</button>
                
            </>
        )
    }
}


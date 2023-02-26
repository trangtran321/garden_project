import React, {Component} from 'react';

export class LogoIcon extends Component{
    render(){
        return(
            <logoIcon key={this.props.keyA} className='bg-lime-700 hover:bg-lime-900 text-white flex-initial w-14 h-15 grow-0 rounded lg font-bold px-3 py-7 '>
            {this.props.message}
        </logoIcon>
        )
    }
}
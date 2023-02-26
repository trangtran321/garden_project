import React, {Component} from 'react';


export class NameLogo extends Component{
    render(){
        return(
            <nameLogo key={this.props.keyA} className='bg-lime-600 hover:bg-lime-900 text-white text-4xl flex justify-item-center grow-0 rounded lg font-bold px-20 py-10 '>
            {this.props.message}
        </nameLogo>
        )
    }
}
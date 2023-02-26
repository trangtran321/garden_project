import React, {Component} from 'react';
import {Button} from './Button'

const menuOption = [
    'About Us',
    'Get Started',
    'FAQ',
    'Log In'
]

export class SecondaryMenu extends Component{
    render(){
        const buttons = [] 
        for (let i = 0; i< menuOption.length; i++){
            buttons.push(<Button message={menuOption[i]} key={i}/>)
        }

        return(          
            <div className='flex flex-row place-content-evenly py-2 bg-slate-200'>
                {buttons}
            </div>
        )
    }
}
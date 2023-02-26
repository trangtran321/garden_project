import React, {Component} from 'react';
import {Button} from './Button'

const headerList = [
    'Logo',
    'AppName'
]

export class TopOfHeader extends Component{
    render(){
        const buttons = []
        for (let i = 0; i<headerList.length; i++){
            buttons.push(<Button message={headerList[i]} key={i}/>)
        }

        return(          
            <div className='flex flex-row place-content-evenly py-2 bg-slate-200'>
                {buttons}
            </div>
        )
    }

}
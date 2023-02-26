import React, {Component} from 'react';
import {NameLogo} from './NameLogo'
import {LogoIcon} from './LogoIcon'
import { SocialMediaIcons } from './SocialMediaIcons';


export class TopOfHeader extends Component{
    render(){
        const leftButtons = []
        const socButtons = []
        leftButtons.push(<LogoIcon message={"Icon goes here"} />)
        leftButtons.push(<NameLogo message={"App Name TBD"} />)
        socButtons.push(<SocialMediaIcons message={"FB icon"}/>)
        socButtons.push(<SocialMediaIcons message={"Insta icon"} />)
        leftButtons.push(socButtons)
        
        return(          
            <div 
                className='flex flex-row place-content-evenly py-2 bg-slate-200'>
                    {leftButtons}
            </div>
        )
    }

}
import React, {Component} from 'react';
import {Stuff} from './Stuff'

export class NewStuff extends Component{
    render() {
        let num = 10; 
        let listOfButtons = []
        for (let i = 0; i< num; i++){
            listOfButtons.push(
                    <> 
                        <text> new STUFF</text>
                        <div class="Buttons" > 
                        {/* create dinamically!!!! 5 buttons
                        the text is going to be the number of button it is
                    and the message is going to be 'button'+index */}
                            <Stuff message="button1" TrangMes="1"/>
                        </div>
                    </>
                )
        }
        return (listOfButtons)
    }
}
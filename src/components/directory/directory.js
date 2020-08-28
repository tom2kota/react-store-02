import React, {Component} from "react";
import {MenuItem} from "../menu-item/menuItem"
import categoryOneImage from '../../images/01.png'
import categoryTwoImage from '../../images/03.png'
import categoryThreeImage from '../../images/10.png'
import categoryFourImage from '../../images/11.png'
import categoryFiveImage from '../../images/09.png'
import './directory.scss'

export default class Directory extends Component {

    state = {
        sections: [
            {
                title: 'category #1',
                image: categoryOneImage,
                id: 1
            },
            {
                title: 'category #2',
                image: categoryTwoImage,
                id: 2
            },
            {
                title: 'category #3',
                image: categoryThreeImage,
                id: 3
            },
            {
                title: 'category #4',
                image: categoryFourImage,
                id: 4
            },
            {
                title: 'category #5',
                image: categoryFiveImage,
                id: 5
            },

        ]
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, title, image}) => <MenuItem
                    key={id}
                    title={title.toUpperCase()}
                    image={image}/>)}
            </div>
        )
    }
}
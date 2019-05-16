/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { RichText } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getButtonClass, getButtonStyle } from '../utils';

/**
 * Button save
 */
export default class ButtonSave extends Component {
    render() {
        const { attributes, className } = this.props;
        const { textAlign, url, title, text, btnClass } = attributes;

        return (
            <div className={ className } style={ { textAlign } }>
                <a href={ url } title={ title } className={ getButtonClass( attributes ) } style={ getButtonStyle( attributes ) }>
                    <RichText.Content value={ text } tagName='span' />
                </a>
            </div>
        );
    }
}

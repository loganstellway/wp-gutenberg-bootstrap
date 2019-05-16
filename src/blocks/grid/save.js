/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getContainerClass, getRowClass, getRGBColor, getBackgroundStyles } from '../utils';

export default class GridSave extends Component {
    render() {
        const { attributes, className } = this.props;

        return (
            <div className={ getContainerClass( attributes, className ) } style={ getBackgroundStyles( attributes ) }>
                <div className="bootstrap-grid--mask" style={ { backgroundColor: getRGBColor( attributes.maskColor ) } } />
                <div className="bootstrap-grid--content">
                    <div className={ getRowClass( attributes ) }>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    }
}

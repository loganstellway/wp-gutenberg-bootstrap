/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getColumnClass, getBackgroundColor, getBackgroundStyles } from '../utils';

/**
 * Column save
 */
export default class ColumnEdit extends Component {
    render() {
        // Props
        const {
            attributes,
            className,
        } = this.props;

        // Attributes
        const {
            addMaskColor,
            maskColor,
        } = attributes;

        return (
            <div className={ getColumnClass( attributes, className ) } style={ getBackgroundStyles( attributes ) }>
                <div className="bootstrap-grid--mask" style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } } />
                <div className="bootstrap-grid--content">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
}
